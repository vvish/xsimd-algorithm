window.BENCHMARK_DATA = {
  "lastUpdate": 1776957468826,
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
        "date": 1776957467661,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3799.856292138466,
            "unit": "ns/iter",
            "extra": "iterations: 184214\ncpu: 3799.581334751974 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 246982.39740442001,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 246972.80708523325 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3930095.9382022955,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3929561.7415730343 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 929.5375705182267,
            "unit": "ns/iter",
            "extra": "iterations: 752465\ncpu: 929.485126882978 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61508.697696906194,
            "unit": "ns/iter",
            "extra": "iterations: 11376\ncpu: 61501.69382911394 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 985313.6281690176,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 985187.7788732393 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3813.4040650495376,
            "unit": "ns/iter",
            "extra": "iterations: 183614\ncpu: 3812.9942705893886 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246157.35874912073,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 246139.20309205898 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3999285.5875706133,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3998415.406779662 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1924.2323036631656,
            "unit": "ns/iter",
            "extra": "iterations: 353576\ncpu: 1924.1731622055802 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 125653.35033533315,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 125633.88069184618 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2029841.6260869624,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2029568.6115942022 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 645.0364910504106,
            "unit": "ns/iter",
            "extra": "iterations: 987475\ncpu: 645.0122342337794 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 41680.20559298782,
            "unit": "ns/iter",
            "extra": "iterations: 16771\ncpu: 41679.10553932393 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 964604.430294898,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 964497.5911528154 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 326.03438771718754,
            "unit": "ns/iter",
            "extra": "iterations: 2144981\ncpu: 325.973913521845 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 28490.787876050246,
            "unit": "ns/iter",
            "extra": "iterations: 22138\ncpu: 28489.626840726352 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1042650.5516224236,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1042423.5044247829 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 1285.2422834408544,
            "unit": "ns/iter",
            "extra": "iterations: 544932\ncpu: 1285.20453561178 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 82959.11606401842,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 82947.91736810897 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2048417.3099414895,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2048272.56140351 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 703.1525205861939,
            "unit": "ns/iter",
            "extra": "iterations: 998121\ncpu: 703.0204414094056 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 77108.60851993508,
            "unit": "ns/iter",
            "extra": "iterations: 9155\ncpu: 77091.57181867836 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1980993.0740740662,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 1980684.8148148186 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 683.9191025416685,
            "unit": "ns/iter",
            "extra": "iterations: 1085510\ncpu: 683.8531464472902 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 42950.92422502933,
            "unit": "ns/iter",
            "extra": "iterations: 12194\ncpu: 42947.100377234776 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1264092.5996309961,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1263871.3597785998 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 483.43509966607536,
            "unit": "ns/iter",
            "extra": "iterations: 1448236\ncpu: 483.3163683267089 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 45606.75988251179,
            "unit": "ns/iter",
            "extra": "iterations: 16342\ncpu: 45601.66601395188 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1496975.613733908,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1496748.9334763961 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1283.2462911225402,
            "unit": "ns/iter",
            "extra": "iterations: 554076\ncpu: 1283.0755816891528 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 87361.30037783232,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 87348.95717884145 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2901306.4057377423,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 2900668.700819669 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1310.3520055350746,
            "unit": "ns/iter",
            "extra": "iterations: 534770\ncpu: 1310.2756418647245 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 85619.13778756763,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 85604.37983357765 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2792255.782978743,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 2792079.5574468053 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 950.3198607453972,
            "unit": "ns/iter",
            "extra": "iterations: 736780\ncpu: 950.2944447460578 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61712.80306634952,
            "unit": "ns/iter",
            "extra": "iterations: 11349\ncpu: 61703.111022997466 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 989941.2570621489,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989784.0918079093 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 924.9326870194395,
            "unit": "ns/iter",
            "extra": "iterations: 756392\ncpu: 924.7937630223479 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61557.53210605094,
            "unit": "ns/iter",
            "extra": "iterations: 11353\ncpu: 61555.734695675055 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 986751.0084626266,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 986689.1368124118 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 952.0259778329385,
            "unit": "ns/iter",
            "extra": "iterations: 736859\ncpu: 951.9027276588836 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62269.87011701246,
            "unit": "ns/iter",
            "extra": "iterations: 11110\ncpu: 62265.51827182761 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1493436.616379309,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1493060.540948267 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1882.3489697041607,
            "unit": "ns/iter",
            "extra": "iterations: 371932\ncpu: 1882.2336717464532 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123048.21710063239,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 123039.132828993 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2038829.1049562825,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2038757.6034985343 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}