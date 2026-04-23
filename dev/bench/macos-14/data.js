window.BENCHMARK_DATA = {
  "lastUpdate": 1776956502155,
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
        "date": 1776956500918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 4654.7070167195725,
            "unit": "ns/iter",
            "extra": "iterations: 153234\ncpu: 4605.838129918946 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 333532.02272730035,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 329704.0816326531 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 5931667.008196729,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5859918.032786886 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1283.8821454452172,
            "unit": "ns/iter",
            "extra": "iterations: 574072\ncpu: 1278.4337156314878 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 90273.93121281968,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 89908.71476596846 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1516643.9320593989,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1513292.9936305722 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 5108.240974471928,
            "unit": "ns/iter",
            "extra": "iterations: 129383\ncpu: 5071.098985183516 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 390861.1247572494,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 362644.1747572808 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 6170882.711111753,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 5885392.59259259 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2406.2593022312,
            "unit": "ns/iter",
            "extra": "iterations: 295628\ncpu: 2383.72887547864 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 161507.37268089966,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 161372.6808905379 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2478785.9848487414,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2474571.969696972 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 263.4426560561223,
            "unit": "ns/iter",
            "extra": "iterations: 2587370\ncpu: 263.20162945384664 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 25418.72015211471,
            "unit": "ns/iter",
            "extra": "iterations: 32607\ncpu: 25189.34584598398 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1006570.0101744155,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 971245.639534884 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 410.40000201171546,
            "unit": "ns/iter",
            "extra": "iterations: 1590692\ncpu: 408.86733572558387 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 30689.81198711564,
            "unit": "ns/iter",
            "extra": "iterations: 26078\ncpu: 27918.283610706312 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 809439.253684176,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 799886.3157894707 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 514.2250097044987,
            "unit": "ns/iter",
            "extra": "iterations: 1414299\ncpu: 495.40019472544384 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 48834.150715800584,
            "unit": "ns/iter",
            "extra": "iterations: 15088\ncpu: 48783.66914103925 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1801044.6045340362,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 1800236.7758186348 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 806.5301617610519,
            "unit": "ns/iter",
            "extra": "iterations: 903926\ncpu: 802.8942634684676 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 59322.65104126218,
            "unit": "ns/iter",
            "extra": "iterations: 12821\ncpu: 57041.260432103525 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1801822.7074998096,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 1800967.499999997 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 315.2308473417118,
            "unit": "ns/iter",
            "extra": "iterations: 2325095\ncpu: 314.50800935015553 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 34165.640677054136,
            "unit": "ns/iter",
            "extra": "iterations: 22214\ncpu: 33326.64085711706 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1575338.2675439941,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 1573155.7017543823 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 501.84557037996643,
            "unit": "ns/iter",
            "extra": "iterations: 1589572\ncpu: 496.6708019517211 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 44550.99838365531,
            "unit": "ns/iter",
            "extra": "iterations: 15467\ncpu: 44516.26042542207 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 2020806.6158191306,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2017728.8135593166 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 853.8654260793536,
            "unit": "ns/iter",
            "extra": "iterations: 858948\ncpu: 845.9161672185036 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 104182.16567948542,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 91915.55254696232 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3327968.5023920974,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 3301602.8708134056 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 969.7020697906727,
            "unit": "ns/iter",
            "extra": "iterations: 802255\ncpu: 966.9755875625438 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 86271.85217529153,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 85861.06700539777 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2935110.660465123,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 2911260.4651162373 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 4888.8372608536,
            "unit": "ns/iter",
            "extra": "iterations: 146615\ncpu: 4864.420420830072 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 350296.1368931806,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 347361.6504854359 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 5191171.911111201,
            "unit": "ns/iter",
            "extra": "iterations: 135\ncpu: 5128859.259259328 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1095.3756367246563,
            "unit": "ns/iter",
            "extra": "iterations: 632534\ncpu: 1085.4483711547502 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 75178.79967775571,
            "unit": "ns/iter",
            "extra": "iterations: 9310\ncpu: 75055.31686358772 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1198561.7256637465,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1195438.9380531136 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 4761.980278969884,
            "unit": "ns/iter",
            "extra": "iterations: 141879\ncpu: 4721.826344984147 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 293723.4743589702,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 292655.84935897694 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 4779805.905062818,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 4748753.164556977 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2309.813889311786,
            "unit": "ns/iter",
            "extra": "iterations: 302218\ncpu: 2301.4876678424243 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 146228.08609693375,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 145993.19727891276 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2198607.433846029,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2197307.692307679 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}