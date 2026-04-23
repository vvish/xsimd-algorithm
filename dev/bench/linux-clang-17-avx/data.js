window.BENCHMARK_DATA = {
  "lastUpdate": 1776956529970,
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
        "date": 1776956529029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3800.8780994771014,
            "unit": "ns/iter",
            "extra": "iterations: 183781\ncpu: 3800.4249840843177 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245712.8814035059,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245693.20807017543 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3933399.0224719173,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3932488.6011235947 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 933.0546448888634,
            "unit": "ns/iter",
            "extra": "iterations: 750244\ncpu: 933.0071030224836 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61580.736605964565,
            "unit": "ns/iter",
            "extra": "iterations: 11367\ncpu: 61572.49195038265 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 992229.464589243,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992034.9900849856 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3799.881608509255,
            "unit": "ns/iter",
            "extra": "iterations: 184270\ncpu: 3799.407993704891 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245931.41145466975,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 245899.89002108213 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3948647.774011273,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3947978.8248587595 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1901.8356801646753,
            "unit": "ns/iter",
            "extra": "iterations: 368227\ncpu: 1901.6043826226742 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123559.33439209519,
            "unit": "ns/iter",
            "extra": "iterations: 5667\ncpu: 123548.53538027189 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2032094.9040697375,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2031741.4447674453 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 325.0405304522623,
            "unit": "ns/iter",
            "extra": "iterations: 2149939\ncpu: 325.02203178787875 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 35709.55373126746,
            "unit": "ns/iter",
            "extra": "iterations: 19551\ncpu: 35705.921640836794 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 944215.1469387864,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 944122.4557823134 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 319.2314427740038,
            "unit": "ns/iter",
            "extra": "iterations: 2193566\ncpu: 319.1894139497049 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 36889.311312265185,
            "unit": "ns/iter",
            "extra": "iterations: 18891\ncpu: 36885.85612196271 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1098952.1911532402,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1098640.5781990546 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 887.9345612845376,
            "unit": "ns/iter",
            "extra": "iterations: 786079\ncpu: 887.8302867777905 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 71548.99948400397,
            "unit": "ns/iter",
            "extra": "iterations: 9690\ncpu: 71538.63095975255 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1993141.5616438573,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 1992897.652054793 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 971.9332111223098,
            "unit": "ns/iter",
            "extra": "iterations: 723339\ncpu: 971.8406666860219 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 74374.35014774174,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 74364.3946813002 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1909455.9008264565,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 1909145.3112947687 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 486.2460942551597,
            "unit": "ns/iter",
            "extra": "iterations: 1446011\ncpu: 486.23487304038605 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 53079.937801608285,
            "unit": "ns/iter",
            "extra": "iterations: 13055\ncpu: 53073.33381846037 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1216434.793220347,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1216187.8576271143 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 695.3302341038502,
            "unit": "ns/iter",
            "extra": "iterations: 1071234\ncpu: 695.26757925906 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 53836.82799655611,
            "unit": "ns/iter",
            "extra": "iterations: 12773\ncpu: 53823.77734283251 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1279792.0383141756,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1279695.8256704996 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1029.2179768408946,
            "unit": "ns/iter",
            "extra": "iterations: 680164\ncpu: 1029.101310860321 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 88563.63325471869,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 88543.92452830209 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2850617.6186440885,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 2849804.266949152 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1003.1632691129289,
            "unit": "ns/iter",
            "extra": "iterations: 696923\ncpu: 1002.9890160032018 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 106708.0393514858,
            "unit": "ns/iter",
            "extra": "iterations: 6353\ncpu: 106697.94553754161 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2872546.5524193654,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 2871794.6774193416 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 957.3350244857307,
            "unit": "ns/iter",
            "extra": "iterations: 731651\ncpu: 957.2185727894873 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 62024.788170806736,
            "unit": "ns/iter",
            "extra": "iterations: 11311\ncpu: 62020.151799133346 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 995249.274147746,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 995006.5269886348 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 923.6183068365452,
            "unit": "ns/iter",
            "extra": "iterations: 758143\ncpu: 923.5522797150417 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61598.03585586989,
            "unit": "ns/iter",
            "extra": "iterations: 11351\ncpu: 61587.86133380301 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 988421.1838755276,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 988336.531824614 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 957.4235698275501,
            "unit": "ns/iter",
            "extra": "iterations: 731223\ncpu: 957.3503308840109 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62216.82636970867,
            "unit": "ns/iter",
            "extra": "iterations: 11225\ncpu: 62206.96258351853 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1525966.2850971385,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1525755.6371490248 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1881.360224591084,
            "unit": "ns/iter",
            "extra": "iterations: 372054\ncpu: 1881.0886161686274 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123101.97483280773,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 123091.29232664568 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2047535.248537954,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2047020.8596491267 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}