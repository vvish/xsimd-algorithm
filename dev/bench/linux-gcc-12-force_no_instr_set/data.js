window.BENCHMARK_DATA = {
  "lastUpdate": 1776956439027,
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
        "date": 1776956438677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3800.4741916384423,
            "unit": "ns/iter",
            "extra": "iterations: 184107\ncpu: 3799.6782468890374 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245618.7214035086,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245557.79017543868 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3929229.797752865,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3928658.421348316 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 929.0528788801483,
            "unit": "ns/iter",
            "extra": "iterations: 753609\ncpu: 928.8478999056541 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61497.7201194362,
            "unit": "ns/iter",
            "extra": "iterations: 11387\ncpu: 61494.82049705802 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 984869.2219100733,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 984822.24016854 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3803.5993553919125,
            "unit": "ns/iter",
            "extra": "iterations: 184298\ncpu: 3803.2292808386387 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245786.542325245,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 245779.06989813846 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3948315.0847459487,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3948073.2881355938 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1922.4349721255828,
            "unit": "ns/iter",
            "extra": "iterations: 364313\ncpu: 1922.388344637714 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123022.19382022278,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 123015.14676966294 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 1999191.037249313,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 1999055.2693409729 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 327.08072233173556,
            "unit": "ns/iter",
            "extra": "iterations: 2150037\ncpu: 327.054313483907 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 28103.658911882616,
            "unit": "ns/iter",
            "extra": "iterations: 24501\ncpu: 28102.327823354164 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 983029.1809256597,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 982906.7391304348 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 328.48929661729494,
            "unit": "ns/iter",
            "extra": "iterations: 2116714\ncpu: 328.4777764024808 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 38079.22881770254,
            "unit": "ns/iter",
            "extra": "iterations: 22507\ncpu: 38074.67703381167 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 983739.1438646195,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 983653.5655853325 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 695.9824781646911,
            "unit": "ns/iter",
            "extra": "iterations: 1007657\ncpu: 695.9137315574651 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 72749.23366357203,
            "unit": "ns/iter",
            "extra": "iterations: 9488\ncpu: 72742.55375210788 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1810488.0078739945,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 1810174.501312335 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 1285.7724498020132,
            "unit": "ns/iter",
            "extra": "iterations: 544693\ncpu: 1285.554787742821 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 83091.56368177233,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 83088.18503983824 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1861117.4852546402,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 1860938.9276139454 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 646.9186927470614,
            "unit": "ns/iter",
            "extra": "iterations: 1084442\ncpu: 646.8019921766221 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 53523.11356178002,
            "unit": "ns/iter",
            "extra": "iterations: 13103\ncpu: 53512.117911928726 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1148334.5716611322,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1148185.7866449521 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 484.11947502145165,
            "unit": "ns/iter",
            "extra": "iterations: 1445164\ncpu: 483.99258077284037 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 68237.4088328123,
            "unit": "ns/iter",
            "extra": "iterations: 12680\ncpu: 68170.05394321778 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1127415.9375998352,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1127229.5231999976 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1287.0793117185694,
            "unit": "ns/iter",
            "extra": "iterations: 544661\ncpu: 1286.9446609909667 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 107645.74232657674,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 107641.16037446306 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2516580.8924730234,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 2516358.20430107 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1287.2179589466052,
            "unit": "ns/iter",
            "extra": "iterations: 543974\ncpu: 1287.1078121380826 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 112496.5253471089,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 112483.31078463065 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2503522.801444208,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 2503300.718411541 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 951.089422369113,
            "unit": "ns/iter",
            "extra": "iterations: 736214\ncpu: 950.8913549592877 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61703.732009920845,
            "unit": "ns/iter",
            "extra": "iterations: 11284\ncpu: 61694.553615739096 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 987616.7782486348,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 987547.6497175068 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 925.3500949743968,
            "unit": "ns/iter",
            "extra": "iterations: 757046\ncpu: 925.291818462819 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61576.77323486198,
            "unit": "ns/iter",
            "extra": "iterations: 11373\ncpu: 61572.12934142298 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 985769.8661970921,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 985667.6971831006 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 951.4962656459518,
            "unit": "ns/iter",
            "extra": "iterations: 734933\ncpu: 951.4110714854335 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62038.12196849984,
            "unit": "ns/iter",
            "extra": "iterations: 11298\ncpu: 62034.89228181995 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1257650.6973450745,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1257593.0513274348 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1883.0042412995779,
            "unit": "ns/iter",
            "extra": "iterations: 371820\ncpu: 1882.894473132161 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123230.82799860666,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 123224.4212099897 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2018779.7204612817,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2018618.3544668602 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}