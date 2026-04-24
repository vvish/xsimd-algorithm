window.BENCHMARK_DATA = {
  "lastUpdate": 1777018586878,
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
        "date": 1776956459541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4291.508651176458,
            "unit": "ns/iter",
            "extra": "iterations: 163157\ncpu: 4291.390605367835 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 277098.28198019654,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 277079.64396039594 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 4435339.727848127,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 4435154.588607597 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1051.8091748075306,
            "unit": "ns/iter",
            "extra": "iterations: 666390\ncpu: 1051.7743333483397 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 69305.51757599774,
            "unit": "ns/iter",
            "extra": "iterations: 10099\ncpu: 69306.73066640258 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1110355.038034865,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1110143.9112519827 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 4359.800688846448,
            "unit": "ns/iter",
            "extra": "iterations: 162881\ncpu: 4359.231801130886 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 277124.78613861464,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 277102.59603960346 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 4473197.873417797,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 4472782.905063289 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2170.409781539606,
            "unit": "ns/iter",
            "extra": "iterations: 322301\ncpu: 2170.4459775179125 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 139000.21452669165,
            "unit": "ns/iter",
            "extra": "iterations: 5039\ncpu: 138988.0373089897 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2225422.875796174,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2225280.2324840766 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 391.77212760116396,
            "unit": "ns/iter",
            "extra": "iterations: 1788479\ncpu: 391.73155961014885 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 30116.697372381845,
            "unit": "ns/iter",
            "extra": "iterations: 23253\ncpu: 30114.106738915358 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 737573.2934898669,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 737447.719316966 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 740.9136006264307,
            "unit": "ns/iter",
            "extra": "iterations: 945030\ncpu: 740.8774419859687 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 52578.58824848677,
            "unit": "ns/iter",
            "extra": "iterations: 13377\ncpu: 52569.68430888818 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1045619.8238805961,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1045542.6656716411 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 729.1250523207555,
            "unit": "ns/iter",
            "extra": "iterations: 960422\ncpu: 729.022810806081 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 58660.53254388279,
            "unit": "ns/iter",
            "extra": "iterations: 11907\ncpu: 58657.92273452584 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1679755.6105769144,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 1679431.4471153794 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 2172.669391982051,
            "unit": "ns/iter",
            "extra": "iterations: 321553\ncpu: 2172.5282084135424 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 140363.5351632943,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 140338.89080344615 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2268757.6440129457,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2268262.194174764 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 545.4519521255157,
            "unit": "ns/iter",
            "extra": "iterations: 1280348\ncpu: 545.4509734853331 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 47410.960593134805,
            "unit": "ns/iter",
            "extra": "iterations: 14769\ncpu: 47405.33387500868 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1139682.5665584414,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1139490.9610389618 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 728.4701850546984,
            "unit": "ns/iter",
            "extra": "iterations: 962202\ncpu: 728.4206455609082 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 47616.83670771545,
            "unit": "ns/iter",
            "extra": "iterations: 14373\ncpu: 47614.15591734502 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1167271.7683333408,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1167134.0000000068 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1448.7314609667592,
            "unit": "ns/iter",
            "extra": "iterations: 483844\ncpu: 1448.4307152718736 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 98172.9523743415,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 98172.43557345253 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2484882.5563380136,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 2484696.2887323797 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1237.5265737194502,
            "unit": "ns/iter",
            "extra": "iterations: 565841\ncpu: 1237.4358167753871 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 97715.23091976558,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 97717.56052558057 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2539310.0724637546,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2539088.923913049 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 1069.5024638831785,
            "unit": "ns/iter",
            "extra": "iterations: 653643\ncpu: 1069.4064129807903 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 71153.17979093999,
            "unit": "ns/iter",
            "extra": "iterations: 10045\ncpu: 71156.08899950272 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1111329.440705119,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1111235.3589743597 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1027.6146601242904,
            "unit": "ns/iter",
            "extra": "iterations: 680690\ncpu: 1027.4132865180898 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 69273.74564356363,
            "unit": "ns/iter",
            "extra": "iterations: 10100\ncpu: 69270.670891089 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1109798.6952380876,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1109715.8317460252 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 1075.3178679001683,
            "unit": "ns/iter",
            "extra": "iterations: 650720\ncpu: 1075.3471508482917 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 69731.85290309817,
            "unit": "ns/iter",
            "extra": "iterations: 10041\ncpu: 69725.19061846448 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1131115.008077553,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1131133.6009693085 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2102.347757945151,
            "unit": "ns/iter",
            "extra": "iterations: 333065\ncpu: 2102.255511686897 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 138724.7728712873,
            "unit": "ns/iter",
            "extra": "iterations: 5050\ncpu: 138724.80099009868 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2223189.723809541,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2222905.7238095244 ns\nthreads: 1"
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
        "date": 1776957478337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 5299.733691343374,
            "unit": "ns/iter",
            "extra": "iterations: 133702\ncpu: 5299.423396807825 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 338099.0779220725,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 338063.0197210196 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 5337691.00000005,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 5337091.699999997 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1257.7404495604305,
            "unit": "ns/iter",
            "extra": "iterations: 551650\ncpu: 1257.5944058732903 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 81705.23887016106,
            "unit": "ns/iter",
            "extra": "iterations: 8603\ncpu: 81704.36022317795 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1310363.0687732343,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1310232.418215615 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 5294.750548419791,
            "unit": "ns/iter",
            "extra": "iterations: 132198\ncpu: 5294.321570674295 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 329751.3471231581,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 329714.1474084641 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 5486637.645669328,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 5486465.606299211 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2534.88519848286,
            "unit": "ns/iter",
            "extra": "iterations: 276573\ncpu: 2534.8377715829097 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 163552.53899560074,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 163547.10275399243 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2744205.4417670453,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 2744030.690763052 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 1949.373054846849,
            "unit": "ns/iter",
            "extra": "iterations: 359419\ncpu: 1949.3574546699008 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 124999.57767857188,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 124989.6203571429 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 7461169.7872340605,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 7460797.617021266 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 1992.7791902757467,
            "unit": "ns/iter",
            "extra": "iterations: 349971\ncpu: 1992.6451620277078 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 131725.10594655626,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 131722.37542340992 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 7697672.076923104,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7697034.208791204 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 3918.224382050787,
            "unit": "ns/iter",
            "extra": "iterations: 178615\ncpu: 3918.1678862357453 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 305825.9711538501,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 305820.30594405544 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 4758431.393103451,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 4758176.896551717 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 4030.2210716672103,
            "unit": "ns/iter",
            "extra": "iterations: 173636\ncpu: 4029.921035960282 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 315076.66261261405,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 315058.4108108096 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 5161399.679389238,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5161095.366412209 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 2090.940351089039,
            "unit": "ns/iter",
            "extra": "iterations: 331255\ncpu: 2090.9130126337714 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 350700.9348370935,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 350695.7523809518 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 7791684.677777748,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 7790490.577777753 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 1985.675517068255,
            "unit": "ns/iter",
            "extra": "iterations: 356481\ncpu: 1985.6440651815876 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 324045.34643848334,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 324006.2155411672 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 7226179.80412374,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 7225969.484536106 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 3965.142989380471,
            "unit": "ns/iter",
            "extra": "iterations: 176090\ncpu: 3964.995547731281 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 261165.02758106423,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 261115.6134923607 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 6546623.440366928,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6546441.366972491 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 4070.3094242147463,
            "unit": "ns/iter",
            "extra": "iterations: 171887\ncpu: 4069.97557697789 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 262958.44615964056,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 262943.54254518024 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 6718617.582524244,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 6718131.427184431 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 3257.8405890212516,
            "unit": "ns/iter",
            "extra": "iterations: 214797\ncpu: 3257.7482786072364 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 208717.93291591934,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 208699.1216457958 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 3349145.751196141,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 3348851.698564591 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1219.1858613424617,
            "unit": "ns/iter",
            "extra": "iterations: 573831\ncpu: 1219.1151802534082 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 77765.489832204,
            "unit": "ns/iter",
            "extra": "iterations: 8999\ncpu: 77760.71196799634 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1249968.3631484555,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1249873.2522361423 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 3260.773240939626,
            "unit": "ns/iter",
            "extra": "iterations: 214589\ncpu: 3260.73409168223 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 209246.3212683214,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 209232.69159437672 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 3585847.5678392225,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 3585727.8944723587 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2431.5449830053226,
            "unit": "ns/iter",
            "extra": "iterations: 288031\ncpu: 2431.5723446434617 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 155828.98663994778,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 155824.66867067464 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2582167.428571457,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 2581932.560150378 ns\nthreads: 1"
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
        "date": 1777018586553,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4294.216073038156,
            "unit": "ns/iter",
            "extra": "iterations: 163093\ncpu: 4293.91450276836 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 277024.54394299636,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 277020.79849564546 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 4436199.165605082,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 4435220.808917201 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1050.2713712395514,
            "unit": "ns/iter",
            "extra": "iterations: 666047\ncpu: 1050.3138292042447 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 69279.6376151337,
            "unit": "ns/iter",
            "extra": "iterations: 10097\ncpu: 69273.92255125285 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1120742.3692551604,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1120679.7844690941 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 4288.64990746078,
            "unit": "ns/iter",
            "extra": "iterations: 163174\ncpu: 4288.609018593651 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 277128.81425743195,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 277139.61227722757 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 4463967.394904457,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 4463326.566878976 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2179.205901143119,
            "unit": "ns/iter",
            "extra": "iterations: 322446\ncpu: 2178.952512978917 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 138955.59221758685,
            "unit": "ns/iter",
            "extra": "iterations: 5037\ncpu: 138915.73615247192 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2225693.8694267217,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2225239.665605094 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 391.8938509959869,
            "unit": "ns/iter",
            "extra": "iterations: 1784972\ncpu: 391.8746109182658 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 29373.853239886554,
            "unit": "ns/iter",
            "extra": "iterations: 23828\ncpu: 29372.336998489067 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 820463.7847222087,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 820311.028935185 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 1111.8785227363169,
            "unit": "ns/iter",
            "extra": "iterations: 642079\ncpu: 1111.8545132296815 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 70182.08890898073,
            "unit": "ns/iter",
            "extra": "iterations: 9954\ncpu: 70181.78671890708 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1140628.4666666642,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1140514.2325203216 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 774.3361899260211,
            "unit": "ns/iter",
            "extra": "iterations: 900140\ncpu: 774.3480325282721 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 59081.35653468012,
            "unit": "ns/iter",
            "extra": "iterations: 12097\ncpu: 59075.14127469624 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1727463.1683168276,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 1727196.8688118807 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 2170.528781311706,
            "unit": "ns/iter",
            "extra": "iterations: 322084\ncpu: 2170.374650712244 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 140031.39679999775,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 140025.7582000002 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2313705.892857146,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 2313573.3409090964 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 543.6117793527569,
            "unit": "ns/iter",
            "extra": "iterations: 1283551\ncpu: 543.5756475589981 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 47205.027725310574,
            "unit": "ns/iter",
            "extra": "iterations: 14824\ncpu: 47203.16743119262 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1175243.7103918258,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1175032.2538330539 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 544.2764493797532,
            "unit": "ns/iter",
            "extra": "iterations: 1284170\ncpu: 544.2281862993215 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 47255.65945399401,
            "unit": "ns/iter",
            "extra": "iterations: 14835\ncpu: 47248.18854061345 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1149514.1094771351,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1149386.4428104588 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1448.4636341386597,
            "unit": "ns/iter",
            "extra": "iterations: 482128\ncpu: 1448.4488828692752 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 94956.83054307997,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 94951.29821695919 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2512498.3392226147,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 2512307.229681959 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1348.6773147185,
            "unit": "ns/iter",
            "extra": "iterations: 519156\ncpu: 1348.6413544291083 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 95790.75351439843,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95779.00818889088 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2631058.8614232014,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 2630647.486891405 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 1069.308782890945,
            "unit": "ns/iter",
            "extra": "iterations: 654625\ncpu: 1069.27993584113 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 69562.76742800439,
            "unit": "ns/iter",
            "extra": "iterations: 10070\ncpu: 69555.09453823227 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1111946.1444444198,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1111770.0555555557 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1027.1366338233006,
            "unit": "ns/iter",
            "extra": "iterations: 681010\ncpu: 1027.0367439538302 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 69169.96886120859,
            "unit": "ns/iter",
            "extra": "iterations: 10116\ncpu: 69167.22113483616 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1109213.909667186,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1109093.5641838342 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 1075.266054425935,
            "unit": "ns/iter",
            "extra": "iterations: 651160\ncpu: 1075.260516616498 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 69659.55984901139,
            "unit": "ns/iter",
            "extra": "iterations: 10067\ncpu: 69661.96394159168 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1135689.9724473413,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1135491.098865478 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2103.4110465780623,
            "unit": "ns/iter",
            "extra": "iterations: 332646\ncpu: 2103.448530870667 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 138565.4233663366,
            "unit": "ns/iter",
            "extra": "iterations: 5050\ncpu: 138559.40831683204 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2221631.0666667344,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2221148.9460317586 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}