window.BENCHMARK_DATA = {
  "lastUpdate": 1777018572952,
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
        "date": 1776956444285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4371.67918268677,
            "unit": "ns/iter",
            "extra": "iterations: 155534\ncpu: 4358.56468682089 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 283323.1930466526,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 282587.83165599266 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 5418025.940397251,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 5084529.801324501 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1269.7370156957325,
            "unit": "ns/iter",
            "extra": "iterations: 667633\ncpu: 1206.8906120578226 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 76708.26445340559,
            "unit": "ns/iter",
            "extra": "iterations: 9669\ncpu: 75951.8047367878 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1382328.6852589585,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1268278.8844621505 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 4763.003740206726,
            "unit": "ns/iter",
            "extra": "iterations: 135554\ncpu: 4749.214335246475 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 332566.6665116228,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 332178.6046511634 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 5104069.589999938,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5097220 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2141.4415580201207,
            "unit": "ns/iter",
            "extra": "iterations: 308109\ncpu: 2140.680733117177 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 138367.50598224564,
            "unit": "ns/iter",
            "extra": "iterations: 5182\ncpu: 138240.64067927463 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2195423.4375000326,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2193618.749999998 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 231.0051538199657,
            "unit": "ns/iter",
            "extra": "iterations: 3064329\ncpu: 230.80354622496517 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 18768.81908000231,
            "unit": "ns/iter",
            "extra": "iterations: 31174\ncpu: 18749.8235709245 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 750650.2954911232,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 749720.6119162642 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 411.66938351954576,
            "unit": "ns/iter",
            "extra": "iterations: 1773130\ncpu: 410.36359432190693 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 22739.41661109596,
            "unit": "ns/iter",
            "extra": "iterations: 29992\ncpu: 22728.761002934152 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 736948.1077981616,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 735650.2293577997 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 441.2193673880768,
            "unit": "ns/iter",
            "extra": "iterations: 1623523\ncpu: 440.9232268344819 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 40320.89015388568,
            "unit": "ns/iter",
            "extra": "iterations: 15986\ncpu: 40122.48217190034 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2009551.2106339925,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1784276.0736196234 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 727.7382925869034,
            "unit": "ns/iter",
            "extra": "iterations: 985444\ncpu: 725.7276922889595 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 51864.83749999979,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51559.50000000012 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1809150.438943881,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 1760851.485148515 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 361.6834419499458,
            "unit": "ns/iter",
            "extra": "iterations: 2181066\ncpu: 355.5137717061291 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 49139.609677239285,
            "unit": "ns/iter",
            "extra": "iterations: 17939\ncpu: 44877.139193934745 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1464485.1286088692,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 1452643.0446194175 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 398.54829522794256,
            "unit": "ns/iter",
            "extra": "iterations: 1479318\ncpu: 395.8993265815746 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 29545.655249805124,
            "unit": "ns/iter",
            "extra": "iterations: 20496\ncpu: 29462.236533957792 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1272908.2782323968,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1164278.2324058907 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 536.6308179176641,
            "unit": "ns/iter",
            "extra": "iterations: 1177698\ncpu: 536.5297385237975 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 62687.19672462631,
            "unit": "ns/iter",
            "extra": "iterations: 9892\ncpu: 62647.59401536572 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2246664.143250672,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2244611.570247951 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 741.0524744849691,
            "unit": "ns/iter",
            "extra": "iterations: 969919\ncpu: 740.552561605663 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 60636.15398512202,
            "unit": "ns/iter",
            "extra": "iterations: 9410\ncpu: 60558.55472901184 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2153374.0457515726,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 2142823.5294117653 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 4394.26033084358,
            "unit": "ns/iter",
            "extra": "iterations: 171501\ncpu: 4114.494959213039 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 273484.740472564,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 271792.30182926863 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 4301230.557575763,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 4300509.090909088 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 970.6893751344548,
            "unit": "ns/iter",
            "extra": "iterations: 725148\ncpu: 969.8833893219002 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 67774.1757155946,
            "unit": "ns/iter",
            "extra": "iterations: 9817\ncpu: 67608.84180503218 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1317200.4617690835,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1135818.5907046553 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 4575.0805136342,
            "unit": "ns/iter",
            "extra": "iterations: 162606\ncpu: 4260.998979127462 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 302946.68463394995,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 292238.9380530976 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 5016923.0072463695,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 4650442.0289855255 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2104.7021481566953,
            "unit": "ns/iter",
            "extra": "iterations: 347740\ncpu: 2103.1489043538118 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 138265.23387571186,
            "unit": "ns/iter",
            "extra": "iterations: 5101\ncpu: 138202.31327190946 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2238389.645454521,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2236551.515151513 ns\nthreads: 1"
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
        "date": 1776957530506,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4864.176409529778,
            "unit": "ns/iter",
            "extra": "iterations: 160887\ncpu: 4659.301248702506 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 305185.66922037397,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 303470.03154574113 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 4803889.526315841,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 4765078.947368422 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1072.4191674909653,
            "unit": "ns/iter",
            "extra": "iterations: 661182\ncpu: 1071.6020702317967 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 69016.81653772628,
            "unit": "ns/iter",
            "extra": "iterations: 9953\ncpu: 68983.92444489089 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1224921.332799977,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1223241.6 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 4413.8350800019325,
            "unit": "ns/iter",
            "extra": "iterations: 160496\ncpu: 4409.817067092021 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 320099.49683410634,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 319450.823132124 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 4777752.701298698,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 4747766.233766236 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2255.2104336539933,
            "unit": "ns/iter",
            "extra": "iterations: 322054\ncpu: 2236.556602308926 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 147467.84594817145,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 146517.4825174828 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2458593.9044117737,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2448922.7941176547 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 263.32030544912334,
            "unit": "ns/iter",
            "extra": "iterations: 2391102\ncpu: 262.8499327924948 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 22551.815865384415,
            "unit": "ns/iter",
            "extra": "iterations: 35360\ncpu: 22518.778280542956 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 753610.6000000085,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 751451.4705882329 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 378.6929027737336,
            "unit": "ns/iter",
            "extra": "iterations: 1695437\ncpu: 378.5773225428029 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 26131.738746085863,
            "unit": "ns/iter",
            "extra": "iterations: 30656\ncpu: 26117.36691022981 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1029616.7632183913,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 997841.3793103445 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 683.5127828710681,
            "unit": "ns/iter",
            "extra": "iterations: 1278586\ncpu: 666.0373256081308 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 46155.87581879582,
            "unit": "ns/iter",
            "extra": "iterations: 14503\ncpu: 44703.095911190816 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1872101.3719512867,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 1816009.1463414638 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 894.8916114297178,
            "unit": "ns/iter",
            "extra": "iterations: 845901\ncpu: 887.289410935794 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 71670.72787610716,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 69672.81219272324 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2154884.695290851,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2141889.1966759018 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 332.30839076314044,
            "unit": "ns/iter",
            "extra": "iterations: 1877219\ncpu: 331.4956859055886 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 37771.5567022067,
            "unit": "ns/iter",
            "extra": "iterations: 17539\ncpu: 35353.66896630366 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1516707.4529750845,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1370013.4357005833 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 407.8528763928507,
            "unit": "ns/iter",
            "extra": "iterations: 1528164\ncpu: 405.82882465494384 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 37260.6240207572,
            "unit": "ns/iter",
            "extra": "iterations: 20041\ncpu: 36683.89800908147 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1803902.361751119,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 1632449.3087557629 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 772.9276042360124,
            "unit": "ns/iter",
            "extra": "iterations: 1104153\ncpu: 665.2610643633615 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 73817.21265016915,
            "unit": "ns/iter",
            "extra": "iterations: 9739\ncpu: 69687.85296231677 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2990680.9510205733,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 2966318.367346941 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 903.7233367976662,
            "unit": "ns/iter",
            "extra": "iterations: 740890\ncpu: 898.6381244179341 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 76211.2388347529,
            "unit": "ns/iter",
            "extra": "iterations: 9852\ncpu: 73784.61226146892 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3029365.8504674206,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 2990425.233644876 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 4427.566598590024,
            "unit": "ns/iter",
            "extra": "iterations: 151790\ncpu: 4412.135186771217 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 266921.83929932956,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 265864.0517897932 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 4409572.852760662,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 4386987.730061411 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1109.3482938124434,
            "unit": "ns/iter",
            "extra": "iterations: 718649\ncpu: 989.670896362485 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 68935.61067325226,
            "unit": "ns/iter",
            "extra": "iterations: 10531\ncpu: 68458.36102934236 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1368328.893428086,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1362930.7282415652 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 4129.943993792361,
            "unit": "ns/iter",
            "extra": "iterations: 167535\ncpu: 4128.826812307895 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 269091.52672648494,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 268695.2789699562 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 4416848.270440192,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 4358264.150943463 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2305.7509009610426,
            "unit": "ns/iter",
            "extra": "iterations: 336585\ncpu: 2163.492134230591 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 142494.4525603858,
            "unit": "ns/iter",
            "extra": "iterations: 5175\ncpu: 141891.59420289795 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2196427.8624999165,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2193293.7499999916 ns\nthreads: 1"
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
        "date": 1777018571531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4334.63158938017,
            "unit": "ns/iter",
            "extra": "iterations: 161434\ncpu: 4304.533121895014 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 311597.42672811105,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 264288.940092166 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 4422268.633540359,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 4379906.832298134 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 992.6635050714428,
            "unit": "ns/iter",
            "extra": "iterations: 718730\ncpu: 990.9075730802949 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 65751.1703234343,
            "unit": "ns/iter",
            "extra": "iterations: 10574\ncpu: 65726.02610175898 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1078199.620029463,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1076864.5066273944 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 4284.34057644353,
            "unit": "ns/iter",
            "extra": "iterations: 175247\ncpu: 3948.4213709792425 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 280904.24794315273,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 269712.0418848165 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 4254729.031847137,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 4184681.5286624106 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1948.0735160713602,
            "unit": "ns/iter",
            "extra": "iterations: 351651\ncpu: 1941.6410020162066 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 140791.9011627906,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 134296.13653413334 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2334730.151419578,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2253529.9684542576 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 239.53261994343399,
            "unit": "ns/iter",
            "extra": "iterations: 2932945\ncpu: 239.47158913651612 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 17092.60921825846,
            "unit": "ns/iter",
            "extra": "iterations: 33694\ncpu: 17088.383688490514 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 700207.2254335196,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 690227.7456647418 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 377.25046766441545,
            "unit": "ns/iter",
            "extra": "iterations: 1925526\ncpu: 369.6761300548528 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 22708.288001360037,
            "unit": "ns/iter",
            "extra": "iterations: 29420\ncpu: 22685.38409245403 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 631776.102941166,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 631547.0588235295 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 437.8655470077404,
            "unit": "ns/iter",
            "extra": "iterations: 1522547\ncpu: 437.27254396744394 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 36969.814962762706,
            "unit": "ns/iter",
            "extra": "iterations: 14770\ncpu: 36750.98171970195 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1325679.1523972636,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1324138.698630136 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 704.5991995337531,
            "unit": "ns/iter",
            "extra": "iterations: 969435\ncpu: 703.8316132592693 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 47103.849123749,
            "unit": "ns/iter",
            "extra": "iterations: 14893\ncpu: 47050.15779225152 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1483301.87747036,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1438148.22134387 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 273.4144856649768,
            "unit": "ns/iter",
            "extra": "iterations: 2478754\ncpu: 272.8177140611779 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 30990.701368367936,
            "unit": "ns/iter",
            "extra": "iterations: 21997\ncpu: 30974.22375778493 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1014587.7849002744,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1013944.4444444438 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 371.3761897180479,
            "unit": "ns/iter",
            "extra": "iterations: 1865463\ncpu: 371.18184600820337 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 30660.8428857548,
            "unit": "ns/iter",
            "extra": "iterations: 23467\ncpu: 29197.34094686155 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1093033.8461538397,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1092392.307692303 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 553.7774473399696,
            "unit": "ns/iter",
            "extra": "iterations: 1371581\ncpu: 551.2587298890837 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 68552.44152339104,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 65714.61415433839 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2215932.390322588,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2214954.8387096776 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 727.7134901888297,
            "unit": "ns/iter",
            "extra": "iterations: 833591\ncpu: 727.2307402551179 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 59865.65466680204,
            "unit": "ns/iter",
            "extra": "iterations: 9889\ncpu: 59657.801597734215 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2268008.957654739,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 2263599.3485341948 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 4460.871506206508,
            "unit": "ns/iter",
            "extra": "iterations: 167082\ncpu: 4227.002310242852 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 314433.0665004205,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 295103.075644222 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 4425033.49079754,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 4265122.699386531 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 960.9514365824634,
            "unit": "ns/iter",
            "extra": "iterations: 722931\ncpu: 957.0055786790133 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 67233.71575644614,
            "unit": "ns/iter",
            "extra": "iterations: 10199\ncpu: 67179.52740464685 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1083128.1545741225,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1076252.365930589 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 4079.6524347315512,
            "unit": "ns/iter",
            "extra": "iterations: 171867\ncpu: 4078.6014767233314 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 270090.6795707187,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 269995.78382522095 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 4247672.8395062005,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 4244283.950617315 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1968.1938777574612,
            "unit": "ns/iter",
            "extra": "iterations: 346017\ncpu: 1958.8228324041606 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 140396.97856357624,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 132893.3675338955 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2143176.4164133617,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2105224.92401216 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}