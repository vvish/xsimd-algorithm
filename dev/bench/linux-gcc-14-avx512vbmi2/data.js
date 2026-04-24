window.BENCHMARK_DATA = {
  "lastUpdate": 1777018657296,
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
        "date": 1776957490007,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3812.058868405745,
            "unit": "ns/iter",
            "extra": "iterations: 183511\ncpu: 3812.019726337932 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245781.49367533188,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 245774.16549543216 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3935130.3146067304,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3934796.353932584 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.9728569356138,
            "unit": "ns/iter",
            "extra": "iterations: 751389\ncpu: 930.9291405650058 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61573.33016710644,
            "unit": "ns/iter",
            "extra": "iterations: 11370\ncpu: 61574.11952506591 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 985255.5915492909,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 985185.6042253535 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3798.333257314143,
            "unit": "ns/iter",
            "extra": "iterations: 184164\ncpu: 3798.4215916248536 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245866.185523538,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 245830.49121574147 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3953718.259887012,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3953255.519774007 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1892.4001278329115,
            "unit": "ns/iter",
            "extra": "iterations: 369232\ncpu: 1892.1697333925529 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123096.47467464028,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 123078.66901160742 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2016224.8045977058,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2016033.8505747109 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 645.6529515821976,
            "unit": "ns/iter",
            "extra": "iterations: 1083114\ncpu: 645.5790526204997 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 43738.41312462435,
            "unit": "ns/iter",
            "extra": "iterations: 16610\ncpu: 43728.91023479829 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 928273.6826265343,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 928139.5129958953 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 667.6492355649242,
            "unit": "ns/iter",
            "extra": "iterations: 1052869\ncpu: 667.5888111436469 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 56167.719710377874,
            "unit": "ns/iter",
            "extra": "iterations: 12430\ncpu: 56162.35285599372 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1943385.0498615138,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 1943035.891966762 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 1299.8771060455872,
            "unit": "ns/iter",
            "extra": "iterations: 538806\ncpu: 1299.796381257816 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 100333.44914636006,
            "unit": "ns/iter",
            "extra": "iterations: 6853\ncpu: 100322.72916970651 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1920366.5874316897,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 1919957.513661199 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 1947.4062208950868,
            "unit": "ns/iter",
            "extra": "iterations: 354322\ncpu: 1947.393585495685 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 127890.3615891609,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 127882.38081288963 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2378238.453287213,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 2377733.3737024195 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 486.8117640994832,
            "unit": "ns/iter",
            "extra": "iterations: 1435656\ncpu: 486.812212674903 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 55868.342152247606,
            "unit": "ns/iter",
            "extra": "iterations: 12322\ncpu: 55864.26448628482 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1159931.9081632488,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1159914.139455776 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 967.5871988324448,
            "unit": "ns/iter",
            "extra": "iterations: 723559\ncpu: 967.5613363941227 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 81331.05475303017,
            "unit": "ns/iter",
            "extra": "iterations: 8584\ncpu: 81329.85717614152 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1419920.5878788123,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1419835.2565656472 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1666.5455391972525,
            "unit": "ns/iter",
            "extra": "iterations: 419902\ncpu: 1666.5312763454403 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 103328.69791203758,
            "unit": "ns/iter",
            "extra": "iterations: 6753\ncpu: 103317.04457278214 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2675251.911196915,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 2674807.6640926725 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1995.8592236335094,
            "unit": "ns/iter",
            "extra": "iterations: 350350\ncpu: 1995.8885000713558 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 127703.77929901348,
            "unit": "ns/iter",
            "extra": "iterations: 5478\ncpu: 127684.56936838267 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2792038.685258937,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 2791805.9641434364 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 952.0630324560832,
            "unit": "ns/iter",
            "extra": "iterations: 734685\ncpu: 951.9919625417756 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61911.418977202724,
            "unit": "ns/iter",
            "extra": "iterations: 11361\ncpu: 61747.823607077255 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 987964.9788434359,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 987802.3624823631 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.432079249514,
            "unit": "ns/iter",
            "extra": "iterations: 771134\ncpu: 906.4258922573787 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61479.662249913235,
            "unit": "ns/iter",
            "extra": "iterations: 11396\ncpu: 61475.1722534221 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 986639.3949224041,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 986525.6191819463 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 954.1255274692721,
            "unit": "ns/iter",
            "extra": "iterations: 734166\ncpu: 954.0813726051038 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 61841.86756373993,
            "unit": "ns/iter",
            "extra": "iterations: 11296\ncpu: 61839.446618271904 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1425373.3360161318,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1425047.1207243465 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1870.6352170509554,
            "unit": "ns/iter",
            "extra": "iterations: 374313\ncpu: 1870.5676025144728 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123199.1720979408,
            "unit": "ns/iter",
            "extra": "iterations: 5677\ncpu: 123186.95790029939 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2030333.6521739431,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2029965.7739130338 ns\nthreads: 1"
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
            "email": "vv.os.swe@gmail.com",
            "name": "vvish",
            "username": "vvish"
          },
          "distinct": true,
          "id": "fa5529577f786deace139c7309addf87377d87d9",
          "message": "Workflow fix",
          "timestamp": "2026-04-24T10:14:35+02:00",
          "tree_id": "c0e63c01ea338821dcb61844d25fbd33657a6102",
          "url": "https://github.com/vvish/xsimd-algorithm/commit/fa5529577f786deace139c7309addf87377d87d9"
        },
        "date": 1777018656859,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3799.0521468229995,
            "unit": "ns/iter",
            "extra": "iterations: 184249\ncpu: 3798.8479394732162 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245726.96035087865,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245726.78035087715 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3937702.8820224926,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3937560.4775280887 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 944.8019018157291,
            "unit": "ns/iter",
            "extra": "iterations: 656215\ncpu: 944.6601388264512 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61689.61480887424,
            "unit": "ns/iter",
            "extra": "iterations: 11223\ncpu: 61686.45050343035 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 993187.3281470839,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 993142.5431400298 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3816.8208821028547,
            "unit": "ns/iter",
            "extra": "iterations: 183516\ncpu: 3816.7207491444888 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 247353.1689545959,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 247342.54487856387 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3972532.8920454863,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 3972432.0113636376 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1890.4241576371749,
            "unit": "ns/iter",
            "extra": "iterations: 370268\ncpu: 1890.2088973392213 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123207.80626429696,
            "unit": "ns/iter",
            "extra": "iterations: 5683\ncpu: 123201.03360900935 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2021563.4335259974,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2021312.6820809252 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 437.19775501305213,
            "unit": "ns/iter",
            "extra": "iterations: 1619074\ncpu: 437.2104888349778 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 30840.936210628886,
            "unit": "ns/iter",
            "extra": "iterations: 22637\ncpu: 30836.646507929523 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1127975.7935702165,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1127857.8595600687 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 967.7385138998909,
            "unit": "ns/iter",
            "extra": "iterations: 725725\ncpu: 967.623438630333 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 63389.995294543274,
            "unit": "ns/iter",
            "extra": "iterations: 11051\ncpu: 63392.609175640246 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1200642.7446808403,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1200406.3551554792 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 873.2993610323176,
            "unit": "ns/iter",
            "extra": "iterations: 802075\ncpu: 873.2811781940603 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 59600.1439165291,
            "unit": "ns/iter",
            "extra": "iterations: 11597\ncpu: 59595.06837975331 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1858104.763085418,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 1857989.7465564692 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 3089.3860856167394,
            "unit": "ns/iter",
            "extra": "iterations: 225867\ncpu: 3089.3418870397245 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 104176.11551802055,
            "unit": "ns/iter",
            "extra": "iterations: 6631\ncpu: 104164.84828834284 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2545951.195121964,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 2545884.393728217 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 648.5924495876727,
            "unit": "ns/iter",
            "extra": "iterations: 1077663\ncpu: 648.5515601816145 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 42938.362082646854,
            "unit": "ns/iter",
            "extra": "iterations: 16383\ncpu: 42938.647683574425 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1219425.147329625,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1219312.7569060766 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 966.5445360818994,
            "unit": "ns/iter",
            "extra": "iterations: 725322\ncpu: 966.536208745909 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 66231.37132039688,
            "unit": "ns/iter",
            "extra": "iterations: 10565\ncpu: 66226.73412210162 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1545269.2040358547,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 1545156.0022421498 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1551.239043930614,
            "unit": "ns/iter",
            "extra": "iterations: 451348\ncpu: 1551.194253657929 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 107337.54038997252,
            "unit": "ns/iter",
            "extra": "iterations: 6462\ncpu: 107334.31553698455 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2783370.2352940766,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 2783231.9411764815 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1952.393752053773,
            "unit": "ns/iter",
            "extra": "iterations: 359094\ncpu: 1952.2157819400943 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 135321.71791392064,
            "unit": "ns/iter",
            "extra": "iterations: 5158\ncpu: 135315.74195424505 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2902243.436213992,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 2902079.0411522584 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 952.5937060700802,
            "unit": "ns/iter",
            "extra": "iterations: 734835\ncpu: 952.529297053079 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61798.013857016726,
            "unit": "ns/iter",
            "extra": "iterations: 11330\ncpu: 61797.651897616735 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 990250.5448079647,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 990193.6571834912 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.7189535111607,
            "unit": "ns/iter",
            "extra": "iterations: 771303\ncpu: 906.6143253688881 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61556.365107280704,
            "unit": "ns/iter",
            "extra": "iterations: 11372\ncpu: 61550.18114667577 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 991795.8183098668,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 991722.2309859141 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 953.2635935773328,
            "unit": "ns/iter",
            "extra": "iterations: 733030\ncpu: 953.2736518287038 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62205.76578758378,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 62203.073914603396 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1545793.3460674102,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 1545707.4651685413 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1869.237124549468,
            "unit": "ns/iter",
            "extra": "iterations: 374550\ncpu: 1869.008362034445 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123281.3006501489,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 123207.87735020193 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2041855.8592375563,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2041596.4545454625 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}