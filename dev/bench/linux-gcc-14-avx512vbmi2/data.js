window.BENCHMARK_DATA = {
  "lastUpdate": 1776956471659,
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
        "date": 1776956469075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3810.3092702556432,
            "unit": "ns/iter",
            "extra": "iterations: 183393\ncpu: 3810.02319063432 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245782.96763981428,
            "unit": "ns/iter",
            "extra": "iterations: 2843\ncpu: 245791.2321491382 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3934775.8483145866,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3934468.028089891 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.9965401515434,
            "unit": "ns/iter",
            "extra": "iterations: 751478\ncpu: 931.0015968531357 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61486.25046137658,
            "unit": "ns/iter",
            "extra": "iterations: 11379\ncpu: 61482.878284559265 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 985298.0450704177,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 985253.0183098592 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3798.187219122443,
            "unit": "ns/iter",
            "extra": "iterations: 184244\ncpu: 3798.0377325720196 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245638.21024921234,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 245644.89610389582 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3949607.485875703,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3949223.1525423736 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1891.8458570953865,
            "unit": "ns/iter",
            "extra": "iterations: 370163\ncpu: 1891.8696709287547 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 122951.9204006328,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 122933.6643823579 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2046414.1759530844,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2046083.5043988263 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 429.785755779109,
            "unit": "ns/iter",
            "extra": "iterations: 1626765\ncpu: 429.78204780653664 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 31635.142203082552,
            "unit": "ns/iter",
            "extra": "iterations: 22060\ncpu: 31632.653943789817 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1224377.4356060482,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1224289.3617424252 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 993.5478030673925,
            "unit": "ns/iter",
            "extra": "iterations: 704505\ncpu: 993.5075790803429 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 62884.767892915064,
            "unit": "ns/iter",
            "extra": "iterations: 10982\ncpu: 62881.99717719919 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1489417.0915032763,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1489142.0479302825 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 933.0859074955106,
            "unit": "ns/iter",
            "extra": "iterations: 749888\ncpu: 933.0411461444882 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 63818.70738745721,
            "unit": "ns/iter",
            "extra": "iterations: 10396\ncpu: 63817.527702962965 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2501715.9214285756,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2501522.392857135 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 2827.201931271848,
            "unit": "ns/iter",
            "extra": "iterations: 241706\ncpu: 2827.244474692389 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 111711.9337822667,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 111706.11864678566 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 3211184.607142885,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3210674.1473214254 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 740.6860041123517,
            "unit": "ns/iter",
            "extra": "iterations: 942041\ncpu: 740.6480588424519 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 42202.43579766562,
            "unit": "ns/iter",
            "extra": "iterations: 16448\ncpu: 42198.50535019467 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1513908.4081632716,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1513816.8866213055 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 1178.3940967983658,
            "unit": "ns/iter",
            "extra": "iterations: 593915\ncpu: 1178.390475067989 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 68089.18648887098,
            "unit": "ns/iter",
            "extra": "iterations: 10199\ncpu: 68080.00882439443 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1704070.9595237994,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1703980.730952366 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1601.5143215401956,
            "unit": "ns/iter",
            "extra": "iterations: 437034\ncpu: 1601.5427175002435 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 108918.75228778805,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 108916.00126222789 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3010730.1004784377,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 3010668.3253588597 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 2036.2175288734088,
            "unit": "ns/iter",
            "extra": "iterations: 344175\ncpu: 2036.2086089925187 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 130281.61710106797,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 130279.44946559127 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3185925.3409090177,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 3185893.713636386 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 952.6083623949244,
            "unit": "ns/iter",
            "extra": "iterations: 734646\ncpu: 952.5550823117492 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61859.40177462267,
            "unit": "ns/iter",
            "extra": "iterations: 11270\ncpu: 61847.73433895326 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 993443.1131541744,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 993279.891089103 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.2660174707447,
            "unit": "ns/iter",
            "extra": "iterations: 772032\ncpu: 906.1090913329978 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61499.85877393212,
            "unit": "ns/iter",
            "extra": "iterations: 11386\ncpu: 61493.592481995394 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 986974.9548022773,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986935.4378531066 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 954.8534555502958,
            "unit": "ns/iter",
            "extra": "iterations: 733559\ncpu: 954.8636292377313 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62143.26335503306,
            "unit": "ns/iter",
            "extra": "iterations: 11213\ncpu: 62141.96414875549 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1633921.637777765,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1633864.0999999952 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1858.5125106636215,
            "unit": "ns/iter",
            "extra": "iterations: 376279\ncpu: 1858.5145384143136 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123144.95275728754,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 123148.87267298817 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2067197.1140350702,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2066929.8479532222 ns\nthreads: 1"
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
        "date": 1776956469075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3810.3092702556432,
            "unit": "ns/iter",
            "extra": "iterations: 183393\ncpu: 3810.02319063432 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245782.96763981428,
            "unit": "ns/iter",
            "extra": "iterations: 2843\ncpu: 245791.2321491382 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3934775.8483145866,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3934468.028089891 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.9965401515434,
            "unit": "ns/iter",
            "extra": "iterations: 751478\ncpu: 931.0015968531357 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61486.25046137658,
            "unit": "ns/iter",
            "extra": "iterations: 11379\ncpu: 61482.878284559265 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 985298.0450704177,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 985253.0183098592 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3798.187219122443,
            "unit": "ns/iter",
            "extra": "iterations: 184244\ncpu: 3798.0377325720196 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245638.21024921234,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 245644.89610389582 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3949607.485875703,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3949223.1525423736 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1891.8458570953865,
            "unit": "ns/iter",
            "extra": "iterations: 370163\ncpu: 1891.8696709287547 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 122951.9204006328,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 122933.6643823579 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2046414.1759530844,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2046083.5043988263 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 429.785755779109,
            "unit": "ns/iter",
            "extra": "iterations: 1626765\ncpu: 429.78204780653664 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 31635.142203082552,
            "unit": "ns/iter",
            "extra": "iterations: 22060\ncpu: 31632.653943789817 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1224377.4356060482,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1224289.3617424252 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 993.5478030673925,
            "unit": "ns/iter",
            "extra": "iterations: 704505\ncpu: 993.5075790803429 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 62884.767892915064,
            "unit": "ns/iter",
            "extra": "iterations: 10982\ncpu: 62881.99717719919 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1489417.0915032763,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1489142.0479302825 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 933.0859074955106,
            "unit": "ns/iter",
            "extra": "iterations: 749888\ncpu: 933.0411461444882 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 63818.70738745721,
            "unit": "ns/iter",
            "extra": "iterations: 10396\ncpu: 63817.527702962965 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2501715.9214285756,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2501522.392857135 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 2827.201931271848,
            "unit": "ns/iter",
            "extra": "iterations: 241706\ncpu: 2827.244474692389 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 111711.9337822667,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 111706.11864678566 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 3211184.607142885,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3210674.1473214254 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 740.6860041123517,
            "unit": "ns/iter",
            "extra": "iterations: 942041\ncpu: 740.6480588424519 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 42202.43579766562,
            "unit": "ns/iter",
            "extra": "iterations: 16448\ncpu: 42198.50535019467 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1513908.4081632716,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1513816.8866213055 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 1178.3940967983658,
            "unit": "ns/iter",
            "extra": "iterations: 593915\ncpu: 1178.390475067989 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 68089.18648887098,
            "unit": "ns/iter",
            "extra": "iterations: 10199\ncpu: 68080.00882439443 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1704070.9595237994,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1703980.730952366 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1601.5143215401956,
            "unit": "ns/iter",
            "extra": "iterations: 437034\ncpu: 1601.5427175002435 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 108918.75228778805,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 108916.00126222789 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3010730.1004784377,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 3010668.3253588597 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 2036.2175288734088,
            "unit": "ns/iter",
            "extra": "iterations: 344175\ncpu: 2036.2086089925187 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 130281.61710106797,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 130279.44946559127 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3185925.3409090177,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 3185893.713636386 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 952.6083623949244,
            "unit": "ns/iter",
            "extra": "iterations: 734646\ncpu: 952.5550823117492 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61859.40177462267,
            "unit": "ns/iter",
            "extra": "iterations: 11270\ncpu: 61847.73433895326 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 993443.1131541744,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 993279.891089103 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.2660174707447,
            "unit": "ns/iter",
            "extra": "iterations: 772032\ncpu: 906.1090913329978 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61499.85877393212,
            "unit": "ns/iter",
            "extra": "iterations: 11386\ncpu: 61493.592481995394 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 986974.9548022773,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986935.4378531066 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 954.8534555502958,
            "unit": "ns/iter",
            "extra": "iterations: 733559\ncpu: 954.8636292377313 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62143.26335503306,
            "unit": "ns/iter",
            "extra": "iterations: 11213\ncpu: 62141.96414875549 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1633921.637777765,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1633864.0999999952 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1858.5125106636215,
            "unit": "ns/iter",
            "extra": "iterations: 376279\ncpu: 1858.5145384143136 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123144.95275728754,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 123148.87267298817 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2067197.1140350702,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2066929.8479532222 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}