window.BENCHMARK_DATA = {
  "lastUpdate": 1776957573247,
  "repoUrl": "https://github.com/vvish/xsimd-algorithm",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "vv.os.swe@gmail.com",
            "name": "vvish",
            "username": "vvish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b628ed8d8f5519d9c4a56fefd2df0c7562eb50f6",
          "message": "Added continious benchmarking for algorithms",
          "timestamp": "2026-04-23T16:59:04+02:00",
          "tree_id": "e4bc5ab0e7f555124211c5fa21d10cbcc1f2b612",
          "url": "https://github.com/vvish/xsimd-algorithm/commit/b628ed8d8f5519d9c4a56fefd2df0c7562eb50f6"
        },
        "date": 1776956455693,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3327.928135502828,
            "unit": "ns/iter",
            "extra": "iterations: 210062\ncpu: 3327.3344155535033 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 214896.75231053718,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 214845.1404805916 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3442897.6551723797,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3441588.2413793104 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 815.8198922536022,
            "unit": "ns/iter",
            "extra": "iterations: 857198\ncpu: 815.6196689679632 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 53884.78862289289,
            "unit": "ns/iter",
            "extra": "iterations: 12991\ncpu: 53883.033792625676 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 861326.1462264123,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 861247.6022012584 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3410.9352132769086,
            "unit": "ns/iter",
            "extra": "iterations: 210290\ncpu: 3410.765338342286 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 214885.10039914038,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 214847.23733497082 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3473070.024630543,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3472584.9852216737 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1684.133699514757,
            "unit": "ns/iter",
            "extra": "iterations: 415641\ncpu: 1684.0810483085165 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 108691.64615147216,
            "unit": "ns/iter",
            "extra": "iterations: 6483\ncpu: 108686.9154712325 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 1731972.067039112,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 1731825.7318435754 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 307.49450723914975,
            "unit": "ns/iter",
            "extra": "iterations: 2299026\ncpu: 307.4466374021 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 23336.347951855438,
            "unit": "ns/iter",
            "extra": "iterations: 30076\ncpu: 23332.326439686105 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 863945.5701657523,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 863789.0353591176 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 574.595205285996,
            "unit": "ns/iter",
            "extra": "iterations: 1224974\ncpu: 574.4795971179797 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 40982.87320406486,
            "unit": "ns/iter",
            "extra": "iterations: 17122\ncpu: 40973.73069734842 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 941810.8047493409,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 941655.5686015815 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 603.2515026486919,
            "unit": "ns/iter",
            "extra": "iterations: 1160950\ncpu: 603.1474852491503 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 45671.23174486811,
            "unit": "ns/iter",
            "extra": "iterations: 13640\ncpu: 45671.53526392954 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1561139.4031180302,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 1560998.830734973 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 1248.2971456361493,
            "unit": "ns/iter",
            "extra": "iterations: 561351\ncpu: 1248.0964458957023 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 82377.57229477623,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 82375.39610541028 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2013320.4314868893,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2012836.6938775575 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 421.9036944657292,
            "unit": "ns/iter",
            "extra": "iterations: 1654204\ncpu: 421.8852209280106 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 36599.739041634646,
            "unit": "ns/iter",
            "extra": "iterations: 19095\ncpu: 36597.264257659124 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1098164.447900475,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1097860.7791601869 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 421.85605556938555,
            "unit": "ns/iter",
            "extra": "iterations: 1659043\ncpu: 421.8099392239967 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 36672.63237066912,
            "unit": "ns/iter",
            "extra": "iterations: 19079\ncpu: 36665.85250799296 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1059337.7730711112,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1059260.5990922803 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1124.534805587372,
            "unit": "ns/iter",
            "extra": "iterations: 623262\ncpu: 1124.4203529173913 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 76350.96455105075,
            "unit": "ns/iter",
            "extra": "iterations: 9422\ncpu: 76337.06750159149 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2350522.8080808064,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 2349971.6969696954 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 977.8241706466064,
            "unit": "ns/iter",
            "extra": "iterations: 715256\ncpu: 977.7316597134478 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 75815.08316188437,
            "unit": "ns/iter",
            "extra": "iterations: 9235\ncpu: 75807.26789388187 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2381575.842465766,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 2381269.147260278 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 831.5512031577077,
            "unit": "ns/iter",
            "extra": "iterations: 841120\ncpu: 831.5004636674876 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 54053.92686694023,
            "unit": "ns/iter",
            "extra": "iterations: 12949\ncpu: 54042.774036605464 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 863283.7896678994,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 863110.7257072603 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 795.7636733389404,
            "unit": "ns/iter",
            "extra": "iterations: 879211\ncpu: 795.6461418248832 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 53735.722217955125,
            "unit": "ns/iter",
            "extra": "iterations: 13021\ncpu: 53734.96751401537 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 860786.3333333035,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 860041.7724477221 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 836.1371175361605,
            "unit": "ns/iter",
            "extra": "iterations: 835896\ncpu: 836.099155875854 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 53934.68399281951,
            "unit": "ns/iter",
            "extra": "iterations: 12813\ncpu: 53932.25825333649 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 917658.2543507415,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 917548.8500669285 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1630.049675854842,
            "unit": "ns/iter",
            "extra": "iterations: 429283\ncpu: 1629.8688534137198 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 107465.30902670938,
            "unit": "ns/iter",
            "extra": "iterations: 6514\ncpu: 107453.27110838222 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 1723503.2419753196,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 1723217.4592592742 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vv.os.swe@gmail.com",
            "name": "vvish",
            "username": "vvish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b628ed8d8f5519d9c4a56fefd2df0c7562eb50f6",
          "message": "Added continious benchmarking for algorithms",
          "timestamp": "2026-04-23T16:59:04+02:00",
          "tree_id": "e4bc5ab0e7f555124211c5fa21d10cbcc1f2b612",
          "url": "https://github.com/vvish/xsimd-algorithm/commit/b628ed8d8f5519d9c4a56fefd2df0c7562eb50f6"
        },
        "date": 1776956455693,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3327.928135502828,
            "unit": "ns/iter",
            "extra": "iterations: 210062\ncpu: 3327.3344155535033 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 214896.75231053718,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 214845.1404805916 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3442897.6551723797,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3441588.2413793104 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 815.8198922536022,
            "unit": "ns/iter",
            "extra": "iterations: 857198\ncpu: 815.6196689679632 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 53884.78862289289,
            "unit": "ns/iter",
            "extra": "iterations: 12991\ncpu: 53883.033792625676 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 861326.1462264123,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 861247.6022012584 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3410.9352132769086,
            "unit": "ns/iter",
            "extra": "iterations: 210290\ncpu: 3410.765338342286 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 214885.10039914038,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 214847.23733497082 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3473070.024630543,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3472584.9852216737 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1684.133699514757,
            "unit": "ns/iter",
            "extra": "iterations: 415641\ncpu: 1684.0810483085165 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 108691.64615147216,
            "unit": "ns/iter",
            "extra": "iterations: 6483\ncpu: 108686.9154712325 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 1731972.067039112,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 1731825.7318435754 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 307.49450723914975,
            "unit": "ns/iter",
            "extra": "iterations: 2299026\ncpu: 307.4466374021 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 23336.347951855438,
            "unit": "ns/iter",
            "extra": "iterations: 30076\ncpu: 23332.326439686105 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 863945.5701657523,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 863789.0353591176 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 574.595205285996,
            "unit": "ns/iter",
            "extra": "iterations: 1224974\ncpu: 574.4795971179797 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 40982.87320406486,
            "unit": "ns/iter",
            "extra": "iterations: 17122\ncpu: 40973.73069734842 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 941810.8047493409,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 941655.5686015815 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 603.2515026486919,
            "unit": "ns/iter",
            "extra": "iterations: 1160950\ncpu: 603.1474852491503 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 45671.23174486811,
            "unit": "ns/iter",
            "extra": "iterations: 13640\ncpu: 45671.53526392954 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1561139.4031180302,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 1560998.830734973 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 1248.2971456361493,
            "unit": "ns/iter",
            "extra": "iterations: 561351\ncpu: 1248.0964458957023 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 82377.57229477623,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 82375.39610541028 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2013320.4314868893,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2012836.6938775575 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 421.9036944657292,
            "unit": "ns/iter",
            "extra": "iterations: 1654204\ncpu: 421.8852209280106 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 36599.739041634646,
            "unit": "ns/iter",
            "extra": "iterations: 19095\ncpu: 36597.264257659124 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1098164.447900475,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1097860.7791601869 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 421.85605556938555,
            "unit": "ns/iter",
            "extra": "iterations: 1659043\ncpu: 421.8099392239967 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 36672.63237066912,
            "unit": "ns/iter",
            "extra": "iterations: 19079\ncpu: 36665.85250799296 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1059337.7730711112,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1059260.5990922803 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1124.534805587372,
            "unit": "ns/iter",
            "extra": "iterations: 623262\ncpu: 1124.4203529173913 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 76350.96455105075,
            "unit": "ns/iter",
            "extra": "iterations: 9422\ncpu: 76337.06750159149 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2350522.8080808064,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 2349971.6969696954 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 977.8241706466064,
            "unit": "ns/iter",
            "extra": "iterations: 715256\ncpu: 977.7316597134478 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 75815.08316188437,
            "unit": "ns/iter",
            "extra": "iterations: 9235\ncpu: 75807.26789388187 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2381575.842465766,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 2381269.147260278 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 831.5512031577077,
            "unit": "ns/iter",
            "extra": "iterations: 841120\ncpu: 831.5004636674876 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 54053.92686694023,
            "unit": "ns/iter",
            "extra": "iterations: 12949\ncpu: 54042.774036605464 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 863283.7896678994,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 863110.7257072603 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 795.7636733389404,
            "unit": "ns/iter",
            "extra": "iterations: 879211\ncpu: 795.6461418248832 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 53735.722217955125,
            "unit": "ns/iter",
            "extra": "iterations: 13021\ncpu: 53734.96751401537 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 860786.3333333035,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 860041.7724477221 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 836.1371175361605,
            "unit": "ns/iter",
            "extra": "iterations: 835896\ncpu: 836.099155875854 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 53934.68399281951,
            "unit": "ns/iter",
            "extra": "iterations: 12813\ncpu: 53932.25825333649 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 917658.2543507415,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 917548.8500669285 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1630.049675854842,
            "unit": "ns/iter",
            "extra": "iterations: 429283\ncpu: 1629.8688534137198 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 107465.30902670938,
            "unit": "ns/iter",
            "extra": "iterations: 6514\ncpu: 107453.27110838222 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 1723503.2419753196,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 1723217.4592592742 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vv.os.swe@gmail.com",
            "name": "vvish",
            "username": "vvish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "deebeee849ee622ff207ab4f05db8ed81e9e9489",
          "message": "test benchmark",
          "timestamp": "2026-04-23T17:16:16+02:00",
          "tree_id": "3259e70cf551d9f1bb49ef1608e203364c1ea3e4",
          "url": "https://github.com/vvish/xsimd-algorithm/commit/deebeee849ee622ff207ab4f05db8ed81e9e9489"
        },
        "date": 1776957572287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 5273.939780134275,
            "unit": "ns/iter",
            "extra": "iterations: 133627\ncpu: 5273.637139200908 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 337597.2119748929,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 337586.1999034285 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 5246829.530302997,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 5246542.87878788 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1272.0494315547583,
            "unit": "ns/iter",
            "extra": "iterations: 539190\ncpu: 1271.9604888814702 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 81031.63490227713,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 81024.08210940202 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1335636.5779467712,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1335548.3669201527 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 5260.159548647768,
            "unit": "ns/iter",
            "extra": "iterations: 132668\ncpu: 5260.13276750987 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 323307.6934509931,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 323287.0069670226 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 5426823.671874969,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 5425832.499999992 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2535.7835072216776,
            "unit": "ns/iter",
            "extra": "iterations: 274314\ncpu: 2535.3599524632373 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 168342.09937739532,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 168304.89846743277 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2784956.4858299736,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 2784845.477732792 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 1923.289735555969,
            "unit": "ns/iter",
            "extra": "iterations: 362572\ncpu: 1923.2556319848165 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 123335.05837742696,
            "unit": "ns/iter",
            "extra": "iterations: 5670\ncpu: 123332.75608465611 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 7452098.691489477,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 7451367.117021258 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 1882.0407443978113,
            "unit": "ns/iter",
            "extra": "iterations: 371683\ncpu: 1881.972557259816 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 125072.37785778382,
            "unit": "ns/iter",
            "extra": "iterations: 5555\ncpu: 125064.57407740796 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 7555490.569892472,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7555337.41935481 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 3989.042777366196,
            "unit": "ns/iter",
            "extra": "iterations: 175490\ncpu: 3988.816473873161 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 249543.51032028228,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 249528.08362989262 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 4733188.563758381,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 4732508.583892618 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 4004.8703507879595,
            "unit": "ns/iter",
            "extra": "iterations: 174949\ncpu: 4004.70635442328 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 262839.2871698122,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 262815.4743396226 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 5096757.764705874,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 5096427.45588234 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 1939.7827925516856,
            "unit": "ns/iter",
            "extra": "iterations: 358740\ncpu: 1939.675935217705 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 140040.94952934107,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 140032.31063488845 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 7823867.766666758,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 7822617.022222211 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 1975.211469191659,
            "unit": "ns/iter",
            "extra": "iterations: 355910\ncpu: 1975.075797252108 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 123442.7513302578,
            "unit": "ns/iter",
            "extra": "iterations: 5638\ncpu: 123438.68180205734 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 7241851.453608322,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 7241290.474226795 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 3957.763195167267,
            "unit": "ns/iter",
            "extra": "iterations: 175803\ncpu: 3957.74318413223 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 269997.2868725863,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 269964.4266409259 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 6403428.132743312,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 6403029.380530974 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 4070.8149954937926,
            "unit": "ns/iter",
            "extra": "iterations: 171985\ncpu: 4070.6641683867742 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 269218.26076923264,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 269185.95884615445 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 6440430.462963005,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 6439258.268518515 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 3257.8890197301375,
            "unit": "ns/iter",
            "extra": "iterations: 214849\ncpu: 3257.8335901028127 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 208916.83084725693,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 208888.1810859177 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 3357419.4326922735,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 3357360.0480769286 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1219.3987927838693,
            "unit": "ns/iter",
            "extra": "iterations: 573551\ncpu: 1219.2721989849183 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 77821.90982877534,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 77821.6185234595 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1248482.233928578,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1248364.830357142 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 3260.8139394053273,
            "unit": "ns/iter",
            "extra": "iterations: 214672\ncpu: 3260.7950454646966 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 209213.56216378338,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 209190.99671249354 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 3539064.6751267673,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 3538590.5837563686 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2431.2703998158845,
            "unit": "ns/iter",
            "extra": "iterations: 286657\ncpu: 2431.1391663207137 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 155803.3573653789,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 155794.7552291939 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2707833.9189189323,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 2707634.305019318 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}