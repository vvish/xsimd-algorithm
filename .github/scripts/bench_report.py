#!/usr/bin/env python3
"""Render a google-benchmark JSON result as a table.

Compares against an optional baseline produced by an earlier run on the same
platform. A missing or unreadable baseline is not an error: the report then
just lists the raw results.

Usage:
    bench_report.py --platform NAME --current result.json [--baseline base.json]
                    [--threshold 1.5]
"""

import argparse
import json
import sys
import unicodedata

# google-benchmark reports each time in `time_unit`; normalise to nanoseconds
# so a baseline recorded in a different unit still compares correctly.
_UNIT_NS = {"ns": 1.0, "us": 1e3, "ms": 1e6, "s": 1e9}


def _load(path):
    """Return {name: (nanoseconds, unit)} for the iteration rows of a run."""
    with open(path) as f:
        data = json.load(f)

    out = {}
    for b in data.get("benchmarks", []):
        # Skip the aggregate rows google-benchmark emits when repetitions are
        # configured; they would double-count against the raw iterations.
        if b.get("run_type", "iteration") != "iteration":
            continue
        name, unit = b.get("name"), b.get("time_unit", "ns")
        if not name or unit not in _UNIT_NS or "real_time" not in b:
            continue
        out[name] = (float(b["real_time"]) * _UNIT_NS[unit], unit)
    return out


def _sanitise(name):
    """Make a benchmark name safe to drop inside a markdown table cell.

    Names come from the checked-out source, which on a fork pull request is
    not reviewed, so neutralise the characters that could break out of the
    cell or the surrounding code span.
    """
    name = "".join(c for c in name if c.isprintable())
    return name.replace("|", "\\|").replace("`", "'")[:200]


def _display_width(s):
    """Column width of `s` in a monospace cell.

    The status icons are single characters that render two columns wide, so
    padding by len() alone would leave the Change column ragged.
    """
    w = 0
    for ch in s:
        if unicodedata.combining(ch):
            continue
        if ch == "️":  # variation selector: forces emoji (wide) form
            w += 1
        elif unicodedata.east_asian_width(ch) in "WF":
            w += 2
        else:
            w += 1
    return w


def _render_table(headers, rows):
    """Render a markdown table with padded, aligned columns."""
    widths = [max(_display_width(h), *(_display_width(r[i]) for r in rows))
              if rows else _display_width(h)
              for i, h in enumerate(headers)]

    def pad(cell, i):
        return cell + " " * (widths[i] - _display_width(cell))

    out = ["| " + " | ".join(pad(h, i) for i, h in enumerate(headers)) + " |",
           "|-" + "-|-".join("-" * w for w in widths) + "-|"]
    out += ["| " + " | ".join(pad(c, i) for i, c in enumerate(r)) + " |"
            for r in rows]
    return out


def _fmt(ns, unit):
    return f"{ns / _UNIT_NS[unit]:.2f} {unit}"


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--platform", required=True)
    p.add_argument("--current", required=True)
    p.add_argument("--baseline")
    p.add_argument("--threshold", type=float, default=1.5,
                   help="ratio at which a change is called out (default 1.5)")
    args = p.parse_args()

    current = _load(args.current)

    baseline = {}
    if args.baseline:
        try:
            baseline = _load(args.baseline)
        except (OSError, ValueError):
            pass

    out = [f"## Benchmarks: `{_sanitise(args.platform)}`", ""]

    if not current:
        out += ["No benchmark results were produced.", ""]
        print("\n".join(out))
        return

    if not baseline:
        out += [
            f"No baseline available for this platform yet - showing "
            f"{len(current)} raw results. A baseline is recorded on every "
            f"push to the default branch.",
            "",
        ]
        out += _render_table(
            ["Benchmark", "Real time"],
            [[f"`{_sanitise(n)}`", _fmt(ns, u)] for n, (ns, u) in current.items()],
        )
        out.append("")
        print("\n".join(out))
        return

    icon = {"regressed": "🔴", "improved": "🟢", "unchanged": "✅", "new": "ℹ️"}

    rows, regressed, improved, unchanged, added = [], [], [], 0, []
    for name, (ns, unit) in current.items():
        if name not in baseline:
            added.append(name)
            rows.append([f"`{_sanitise(name)}`", "-", _fmt(ns, unit),
                         f"{icon['new']} new"])
            continue
        old_ns = baseline[name][0]
        ratio = ns / old_ns if old_ns > 0 else float("inf")
        pct = (ratio - 1) * 100
        if ratio >= args.threshold:
            kind = "regressed"
            regressed.append(name)
        elif ratio <= 1 / args.threshold:
            kind = "improved"
            improved.append(name)
        else:
            kind = "unchanged"
            unchanged += 1
        rows.append([f"`{_sanitise(name)}`", _fmt(old_ns, unit), _fmt(ns, unit),
                     f"{icon[kind]} {pct:+.1f}%"])

    removed = [n for n in baseline if n not in current]

    out += [
        f"{len(regressed)} slower, {len(improved)} faster, "
        f"{unchanged} within threshold, {len(added)} new, {len(removed)} gone "
        f"- a change is called out past {args.threshold:g}x.",
        "",
    ]

    out += _render_table(["Benchmark", "Baseline", "Current", "Change"], rows)
    out.append("")

    if removed:
        out += ["Present in the baseline but not in this run: "
                + ", ".join(f"`{_sanitise(n)}`" for n in sorted(removed)[:20]),
                ""]

    print("\n".join(out))


if __name__ == "__main__":
    sys.exit(main())
