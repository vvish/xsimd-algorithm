window.BENCHMARK_DATA = {
  "lastUpdate": 1776956495630,
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
        "date": 1776956495319,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4292.2321000667735,
            "unit": "ns/iter",
            "extra": "iterations: 163171\ncpu: 4291.865637889086 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 276843.95055379806,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 276821.99643987336 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 4432789.955696218,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 4431928.126582279 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1053.8394670987245,
            "unit": "ns/iter",
            "extra": "iterations: 664138\ncpu: 1053.8106643498795 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 69244.49856591818,
            "unit": "ns/iter",
            "extra": "iterations: 10111\ncpu: 69241.33399268129 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1110353.4864433727,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1110108.3700159488 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 4289.577936326992,
            "unit": "ns/iter",
            "extra": "iterations: 163146\ncpu: 4289.40213673642 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 276971.6205940574,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 276952.94693069335 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 4437855.405063271,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 4437437.664556961 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2132.4170605183594,
            "unit": "ns/iter",
            "extra": "iterations: 325207\ncpu: 2132.394152032402 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 141362.85927547788,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 141354.82145700656 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2228701.7301587346,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2228435.6698412704 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 369.2580948069972,
            "unit": "ns/iter",
            "extra": "iterations: 1897729\ncpu: 369.23440016988707 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 28946.086961879813,
            "unit": "ns/iter",
            "extra": "iterations: 24344\ncpu: 28944.984595793645 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 787518.8199105036,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 787459.9485458613 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 360.3441296901315,
            "unit": "ns/iter",
            "extra": "iterations: 1942538\ncpu: 360.3279096728097 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 28071.21720309404,
            "unit": "ns/iter",
            "extra": "iterations: 24949\ncpu: 28070.44126017078 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 799717.1395616969,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 799639.427912343 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 727.1851384671756,
            "unit": "ns/iter",
            "extra": "iterations: 964019\ncpu: 727.0364837207571 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 55637.72396536725,
            "unit": "ns/iter",
            "extra": "iterations: 12589\ncpu: 55629.576296766885 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1684491.2378640838,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 1684335.0825242663 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 728.1778494048458,
            "unit": "ns/iter",
            "extra": "iterations: 960841\ncpu: 728.1456911185088 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 56091.4947452225,
            "unit": "ns/iter",
            "extra": "iterations: 12560\ncpu: 56084.17906050943 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1682356.2289156865,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 1682100.5493975868 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 545.0427257114522,
            "unit": "ns/iter",
            "extra": "iterations: 1285081\ncpu: 544.8731511865776 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 43783.57407407417,
            "unit": "ns/iter",
            "extra": "iterations: 15984\ncpu: 43767.509572071926 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1120281.37479806,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1120076.7512116309 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 728.8881171665068,
            "unit": "ns/iter",
            "extra": "iterations: 959182\ncpu: 728.8309820242662 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 47353.33344601471,
            "unit": "ns/iter",
            "extra": "iterations: 14791\ncpu: 47342.57643161394 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1181212.7436332863,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1180945.4227504223 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1099.8269437685842,
            "unit": "ns/iter",
            "extra": "iterations: 636637\ncpu: 1099.6778116886067 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 90448.90166688172,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 90445.44204677598 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2464667.862676086,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 2464494.454225357 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1129.6682172197104,
            "unit": "ns/iter",
            "extra": "iterations: 618489\ncpu: 1129.6532323129409 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 94538.39870427837,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 94520.56836280196 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2568152.2436363734,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 2567742.836363632 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 1076.0559940264723,
            "unit": "ns/iter",
            "extra": "iterations: 650873\ncpu: 1075.9420486024185 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 69544.67143140752,
            "unit": "ns/iter",
            "extra": "iterations: 10074\ncpu: 69532.75441731185 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1120827.5317460313,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1120712.8920634969 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1028.244598183794,
            "unit": "ns/iter",
            "extra": "iterations: 679216\ncpu: 1028.1824368095022 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 69295.28104575194,
            "unit": "ns/iter",
            "extra": "iterations: 10098\ncpu: 69291.8566052682 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1110029.1790808141,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109954.7686212347 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 1081.5245670137729,
            "unit": "ns/iter",
            "extra": "iterations: 634489\ncpu: 1081.4191672353659 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 69622.92746268575,
            "unit": "ns/iter",
            "extra": "iterations: 10050\ncpu: 69615.85134328305 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1137367.9398373938,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1137237.7024390234 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2113.638716772071,
            "unit": "ns/iter",
            "extra": "iterations: 331009\ncpu: 2113.591301142883 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 138629.88794298322,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 138607.9847554945 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2223297.1746031838,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2222963.6253968235 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}