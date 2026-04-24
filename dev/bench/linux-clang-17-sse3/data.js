window.BENCHMARK_DATA = {
  "lastUpdate": 1777018665209,
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
        "date": 1776957473258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3802.825022808307,
            "unit": "ns/iter",
            "extra": "iterations: 184144\ncpu: 3802.395207011903 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245891.12640449358,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 245822.62394662926 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3935607.3370786305,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3935167.5393258426 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 946.2001132239776,
            "unit": "ns/iter",
            "extra": "iterations: 740126\ncpu: 945.9465104590306 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61666.713326856385,
            "unit": "ns/iter",
            "extra": "iterations: 11323\ncpu: 61648.58173628895 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 998787.9886363759,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 998370.1846590907 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3815.211127450945,
            "unit": "ns/iter",
            "extra": "iterations: 183600\ncpu: 3813.803747276689 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246666.64659213883,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 246642.89902632512 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3955564.536723125,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3955127.89265537 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1903.1143157888812,
            "unit": "ns/iter",
            "extra": "iterations: 367657\ncpu: 1902.6210625664678 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123529.71020623928,
            "unit": "ns/iter",
            "extra": "iterations: 5673\ncpu: 123506.04001410214 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2033179.764534889,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2032892.0377906964 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 325.5109900257318,
            "unit": "ns/iter",
            "extra": "iterations: 2149631\ncpu: 325.4438473393809 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 28043.774427604072,
            "unit": "ns/iter",
            "extra": "iterations: 24808\ncpu: 28039.60782811992 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 979904.3636363578,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 979797.3916083893 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 319.25866688965874,
            "unit": "ns/iter",
            "extra": "iterations: 2188386\ncpu: 319.15812155625207 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 29447.079881531474,
            "unit": "ns/iter",
            "extra": "iterations: 23635\ncpu: 29440.892405331022 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1133249.669934632,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1133141.4689542444 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 653.0151898852467,
            "unit": "ns/iter",
            "extra": "iterations: 1070120\ncpu: 652.9515465555263 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 56734.54477673734,
            "unit": "ns/iter",
            "extra": "iterations: 12071\ncpu: 56720.07696131244 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2005999.531073449,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2005690.6949152548 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 654.0114329147282,
            "unit": "ns/iter",
            "extra": "iterations: 1070943\ncpu: 653.8310731756995 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 57764.31586978591,
            "unit": "ns/iter",
            "extra": "iterations: 11796\ncpu: 57755.93557137991 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2025056.528571432,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2024815.6800000013 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 595.4880124523936,
            "unit": "ns/iter",
            "extra": "iterations: 1178890\ncpu: 595.457047731339 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 41187.32760346134,
            "unit": "ns/iter",
            "extra": "iterations: 16987\ncpu: 41183.23476776362 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1230355.8239316258,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1230294.7658119684 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 661.2108517918807,
            "unit": "ns/iter",
            "extra": "iterations: 1071952\ncpu: 661.0941133558234 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 43077.52424261024,
            "unit": "ns/iter",
            "extra": "iterations: 16273\ncpu: 43069.75351809746 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1342133.422138836,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1341877.887429643 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1084.1159295416564,
            "unit": "ns/iter",
            "extra": "iterations: 646453\ncpu: 1084.0001144708133 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 81246.9782379786,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81224.87129987146 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3030492.608695691,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 3030130.830434777 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1069.1228592702776,
            "unit": "ns/iter",
            "extra": "iterations: 655384\ncpu: 1068.9797599575181 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 87647.58469323204,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 87626.9100569258 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3080026.9531915,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3079522.0085106557 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 958.2664837007555,
            "unit": "ns/iter",
            "extra": "iterations: 730555\ncpu: 958.1305979700344 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61768.020037073285,
            "unit": "ns/iter",
            "extra": "iterations: 11329\ncpu: 61764.55053402818 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1030944.1270310213,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1030861.1299852332 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 927.5294637906829,
            "unit": "ns/iter",
            "extra": "iterations: 757540\ncpu: 925.472771074794 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61571.656853240216,
            "unit": "ns/iter",
            "extra": "iterations: 11345\ncpu: 61560.34702512077 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1005673.57864359,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1005548.5858585802 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 958.9819878240558,
            "unit": "ns/iter",
            "extra": "iterations: 730950\ncpu: 958.8804158971254 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62116.4860080468,
            "unit": "ns/iter",
            "extra": "iterations: 11185\ncpu: 62107.81350022347 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1586613.3452914804,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 1586321.2623318322 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1881.3739487328412,
            "unit": "ns/iter",
            "extra": "iterations: 372051\ncpu: 1881.127098166656 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123155.72225153966,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123137.70659630642 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2050340.920353953,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2049925.8613569248 ns\nthreads: 1"
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
        "date": 1777018664747,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3802.1452863474015,
            "unit": "ns/iter",
            "extra": "iterations: 183658\ncpu: 3801.7776410502124 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 246391.26186291923,
            "unit": "ns/iter",
            "extra": "iterations: 2845\ncpu: 246334.31458699467 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3940539.426966311,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3939420.1516853925 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 934.2610776490759,
            "unit": "ns/iter",
            "extra": "iterations: 748444\ncpu: 933.9426690574046 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61666.96315882302,
            "unit": "ns/iter",
            "extra": "iterations: 11346\ncpu: 61654.43548387092 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 997776.634807402,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 997549.3452211124 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3818.583934139075,
            "unit": "ns/iter",
            "extra": "iterations: 183781\ncpu: 3817.5494909702347 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246538.3423645353,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 246490.71885995776 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3958282.960451917,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3957592.8926553745 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1904.6285076895315,
            "unit": "ns/iter",
            "extra": "iterations: 367122\ncpu: 1904.5056738631815 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123789.3480878161,
            "unit": "ns/iter",
            "extra": "iterations: 5648\ncpu: 123776.07754957494 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2042045.0728863007,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2041826.113702621 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 326.37613272530615,
            "unit": "ns/iter",
            "extra": "iterations: 2149462\ncpu: 326.36496062735665 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 28210.5866810338,
            "unit": "ns/iter",
            "extra": "iterations: 23200\ncpu: 28204.195086206906 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1085946.2864077704,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1085868.52750809 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 320.3460356489998,
            "unit": "ns/iter",
            "extra": "iterations: 2189627\ncpu: 320.30936410630665 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 33194.37265173481,
            "unit": "ns/iter",
            "extra": "iterations: 22144\ncpu: 33191.91126264451 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1132128.752688177,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1132003.0568356386 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 653.9775372492946,
            "unit": "ns/iter",
            "extra": "iterations: 1064785\ncpu: 653.9600370027761 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 74696.12595790658,
            "unit": "ns/iter",
            "extra": "iterations: 9265\ncpu: 74685.05936319496 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2040677.148255835,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2040352.125000001 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 655.717830544934,
            "unit": "ns/iter",
            "extra": "iterations: 1067752\ncpu: 655.6421406843532 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 75686.78795840201,
            "unit": "ns/iter",
            "extra": "iterations: 9135\ncpu: 75674.28253968261 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1966350.6848137344,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 1966156.3352435573 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 642.0735525564202,
            "unit": "ns/iter",
            "extra": "iterations: 1089058\ncpu: 641.9848529646736 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 52108.81876725045,
            "unit": "ns/iter",
            "extra": "iterations: 13044\ncpu: 52100.75467647945 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1156031.057724962,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1155856.9592529745 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 658.675698689692,
            "unit": "ns/iter",
            "extra": "iterations: 1068679\ncpu: 658.5689875070045 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 49734.903675049085,
            "unit": "ns/iter",
            "extra": "iterations: 12925\ncpu: 49729.59589941971 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1303781.0952380954,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1303559.6269841304 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1135.8380847467167,
            "unit": "ns/iter",
            "extra": "iterations: 616378\ncpu: 1135.699062912697 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 105795.18654899576,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105780.69643944017 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2757094.920948628,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 2756525.573122531 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1184.2981647438462,
            "unit": "ns/iter",
            "extra": "iterations: 617407\ncpu: 1184.160171491414 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 115573.10686126477,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 115544.77637980189 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2905690.5648535546,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 2905403.9163180115 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 957.1579828482231,
            "unit": "ns/iter",
            "extra": "iterations: 730535\ncpu: 957.0596521727157 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61790.974524546546,
            "unit": "ns/iter",
            "extra": "iterations: 11305\ncpu: 61784.129500220646 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 996371.3385714153,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 996134.9442857121 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 923.2989594978147,
            "unit": "ns/iter",
            "extra": "iterations: 755885\ncpu: 923.2082247961063 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61473.9043898159,
            "unit": "ns/iter",
            "extra": "iterations: 11390\ncpu: 61470.62765583835 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1022142.9723435019,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1021996.3013100452 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 957.1855722210864,
            "unit": "ns/iter",
            "extra": "iterations: 730050\ncpu: 957.0960728717234 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62183.6707295364,
            "unit": "ns/iter",
            "extra": "iterations: 11240\ncpu: 62173.07633451978 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1529759.8636364168,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1529434.1385281326 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1880.9727201891856,
            "unit": "ns/iter",
            "extra": "iterations: 372180\ncpu: 1880.7281772260683 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123112.9912234509,
            "unit": "ns/iter",
            "extra": "iterations: 5697\ncpu: 123104.81797437153 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2049047.3126843977,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2048949.6578171204 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}