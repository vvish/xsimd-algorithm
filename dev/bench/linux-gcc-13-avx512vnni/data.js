window.BENCHMARK_DATA = {
  "lastUpdate": 1776956457387,
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
      }
    ]
  }
}