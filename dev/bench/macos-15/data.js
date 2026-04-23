window.BENCHMARK_DATA = {
  "lastUpdate": 1776956445355,
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
      }
    ]
  }
}