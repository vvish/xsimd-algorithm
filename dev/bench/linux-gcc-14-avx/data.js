window.BENCHMARK_DATA = {
  "lastUpdate": 1776957476768,
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
        "date": 1776956495045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3800.212061136729,
            "unit": "ns/iter",
            "extra": "iterations: 184112\ncpu: 3799.756338533067 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245947.55586788262,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 245923.8099086437 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3939672.370786488,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3939344.6910112337 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.5329478248076,
            "unit": "ns/iter",
            "extra": "iterations: 752599\ncpu: 930.4332626006675 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 62345.6273821021,
            "unit": "ns/iter",
            "extra": "iterations: 11387\ncpu: 62336.89918327921 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 999037.5226629024,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 998844.6203966007 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3798.5362451766905,
            "unit": "ns/iter",
            "extra": "iterations: 184259\ncpu: 3798.063372752482 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246375.9293993683,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 246326.04460835952 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3966069.2316384115,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3965735.881355933 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1886.5191052167816,
            "unit": "ns/iter",
            "extra": "iterations: 371129\ncpu: 1886.246033050502 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123251.33081385202,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 123238.48971699792 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2054752.8236994168,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2054310.0086705226 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 331.0942629124225,
            "unit": "ns/iter",
            "extra": "iterations: 2144311\ncpu: 331.0758635291243 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 29011.92762711846,
            "unit": "ns/iter",
            "extra": "iterations: 23600\ncpu: 29006.948347457634 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1137436.7651888286,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1137305.6486042687 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 329.8146481896931,
            "unit": "ns/iter",
            "extra": "iterations: 2129642\ncpu: 329.7804546491852 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 28597.271177410348,
            "unit": "ns/iter",
            "extra": "iterations: 24401\ncpu: 28594.919183640093 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1168929.8362069104,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1168717.0465517237 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 695.7119220952118,
            "unit": "ns/iter",
            "extra": "iterations: 1006870\ncpu: 695.5704430562041 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 57219.58340914758,
            "unit": "ns/iter",
            "extra": "iterations: 12091\ncpu: 57216.27185509867 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2001749.5527065762,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2001434.6239316228 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 691.311458628718,
            "unit": "ns/iter",
            "extra": "iterations: 1012067\ncpu: 691.2244238770751 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 58869.422224209186,
            "unit": "ns/iter",
            "extra": "iterations: 11186\ncpu: 58846.612015018676 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2163558.6788990716,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2163226.360856271 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 485.6190908611621,
            "unit": "ns/iter",
            "extra": "iterations: 1441496\ncpu: 485.55724608323635 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 42798.17772468345,
            "unit": "ns/iter",
            "extra": "iterations: 16323\ncpu: 42792.520676346416 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1370003.7157464325,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1369849.098159507 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 648.4763928269172,
            "unit": "ns/iter",
            "extra": "iterations: 1079926\ncpu: 648.4134533292109 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 42982.15378914182,
            "unit": "ns/iter",
            "extra": "iterations: 16191\ncpu: 42977.631461923374 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1348855.3301343706,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1348683.9117082537 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1527.6846679632501,
            "unit": "ns/iter",
            "extra": "iterations: 461726\ncpu: 1527.3361734015368 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 82842.81636559361,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 82830.23699007028 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3384007.502369642,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 3383293.829383893 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1427.690133173063,
            "unit": "ns/iter",
            "extra": "iterations: 479151\ncpu: 1427.5084555808116 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 83325.80861014592,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 83320.91054083209 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3184745.004255322,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3184475.9999999986 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 949.9098625081182,
            "unit": "ns/iter",
            "extra": "iterations: 735898\ncpu: 949.881578697043 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61774.09397866463,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61765.17984660146 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1060757.2705530755,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1060531.7727952206 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.1717400233533,
            "unit": "ns/iter",
            "extra": "iterations: 771777\ncpu: 906.0256796976315 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61459.258225849575,
            "unit": "ns/iter",
            "extra": "iterations: 11397\ncpu: 61453.396946564695 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1008281.9870316996,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1008171.6700288227 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 952.9235101376134,
            "unit": "ns/iter",
            "extra": "iterations: 735823\ncpu: 952.7929529248134 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 61826.06872058989,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 61819.63322383025 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1649733.7256235613,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1649336.462585036 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1858.718400912553,
            "unit": "ns/iter",
            "extra": "iterations: 376965\ncpu: 1858.5551974321163 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 122803.83898455433,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 122794.95189064414 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2019150.553314142,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2019060.3342939375 ns\nthreads: 1"
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
        "date": 1776956495045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3800.212061136729,
            "unit": "ns/iter",
            "extra": "iterations: 184112\ncpu: 3799.756338533067 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245947.55586788262,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 245923.8099086437 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3939672.370786488,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3939344.6910112337 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.5329478248076,
            "unit": "ns/iter",
            "extra": "iterations: 752599\ncpu: 930.4332626006675 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 62345.6273821021,
            "unit": "ns/iter",
            "extra": "iterations: 11387\ncpu: 62336.89918327921 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 999037.5226629024,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 998844.6203966007 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3798.5362451766905,
            "unit": "ns/iter",
            "extra": "iterations: 184259\ncpu: 3798.063372752482 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246375.9293993683,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 246326.04460835952 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3966069.2316384115,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3965735.881355933 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1886.5191052167816,
            "unit": "ns/iter",
            "extra": "iterations: 371129\ncpu: 1886.246033050502 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123251.33081385202,
            "unit": "ns/iter",
            "extra": "iterations: 5689\ncpu: 123238.48971699792 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2054752.8236994168,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2054310.0086705226 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 331.0942629124225,
            "unit": "ns/iter",
            "extra": "iterations: 2144311\ncpu: 331.0758635291243 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 29011.92762711846,
            "unit": "ns/iter",
            "extra": "iterations: 23600\ncpu: 29006.948347457634 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1137436.7651888286,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1137305.6486042687 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 329.8146481896931,
            "unit": "ns/iter",
            "extra": "iterations: 2129642\ncpu: 329.7804546491852 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 28597.271177410348,
            "unit": "ns/iter",
            "extra": "iterations: 24401\ncpu: 28594.919183640093 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1168929.8362069104,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1168717.0465517237 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 695.7119220952118,
            "unit": "ns/iter",
            "extra": "iterations: 1006870\ncpu: 695.5704430562041 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 57219.58340914758,
            "unit": "ns/iter",
            "extra": "iterations: 12091\ncpu: 57216.27185509867 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2001749.5527065762,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2001434.6239316228 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 691.311458628718,
            "unit": "ns/iter",
            "extra": "iterations: 1012067\ncpu: 691.2244238770751 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 58869.422224209186,
            "unit": "ns/iter",
            "extra": "iterations: 11186\ncpu: 58846.612015018676 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2163558.6788990716,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2163226.360856271 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 485.6190908611621,
            "unit": "ns/iter",
            "extra": "iterations: 1441496\ncpu: 485.55724608323635 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 42798.17772468345,
            "unit": "ns/iter",
            "extra": "iterations: 16323\ncpu: 42792.520676346416 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1370003.7157464325,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1369849.098159507 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 648.4763928269172,
            "unit": "ns/iter",
            "extra": "iterations: 1079926\ncpu: 648.4134533292109 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 42982.15378914182,
            "unit": "ns/iter",
            "extra": "iterations: 16191\ncpu: 42977.631461923374 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1348855.3301343706,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1348683.9117082537 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1527.6846679632501,
            "unit": "ns/iter",
            "extra": "iterations: 461726\ncpu: 1527.3361734015368 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 82842.81636559361,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 82830.23699007028 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3384007.502369642,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 3383293.829383893 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1427.690133173063,
            "unit": "ns/iter",
            "extra": "iterations: 479151\ncpu: 1427.5084555808116 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 83325.80861014592,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 83320.91054083209 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3184745.004255322,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3184475.9999999986 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 949.9098625081182,
            "unit": "ns/iter",
            "extra": "iterations: 735898\ncpu: 949.881578697043 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61774.09397866463,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61765.17984660146 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1060757.2705530755,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1060531.7727952206 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.1717400233533,
            "unit": "ns/iter",
            "extra": "iterations: 771777\ncpu: 906.0256796976315 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61459.258225849575,
            "unit": "ns/iter",
            "extra": "iterations: 11397\ncpu: 61453.396946564695 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1008281.9870316996,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1008171.6700288227 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 952.9235101376134,
            "unit": "ns/iter",
            "extra": "iterations: 735823\ncpu: 952.7929529248134 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 61826.06872058989,
            "unit": "ns/iter",
            "extra": "iterations: 11263\ncpu: 61819.63322383025 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1649733.7256235613,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1649336.462585036 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1858.718400912553,
            "unit": "ns/iter",
            "extra": "iterations: 376965\ncpu: 1858.5551974321163 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 122803.83898455433,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 122794.95189064414 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2019150.553314142,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2019060.3342939375 ns\nthreads: 1"
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
        "date": 1776957475846,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3331.458032819657,
            "unit": "ns/iter",
            "extra": "iterations: 210057\ncpu: 3330.6233784163346 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 214724.5524539892,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 214672.33036809813 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3467995.7931034737,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3467519.9753694586 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 827.8289699691986,
            "unit": "ns/iter",
            "extra": "iterations: 833111\ncpu: 827.7357867078939 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 54401.0918234159,
            "unit": "ns/iter",
            "extra": "iterations: 13025\ncpu: 54381.448214971184 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 864019.3726937325,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 863864.560885609 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3326.9015632946216,
            "unit": "ns/iter",
            "extra": "iterations: 210389\ncpu: 3326.5304174647913 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 214829.3626036253,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 214802.67823150117 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3441122.4285714678,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3440662.389162563 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1652.7874132874836,
            "unit": "ns/iter",
            "extra": "iterations: 423526\ncpu: 1652.524562836755 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 108080.27683095424,
            "unit": "ns/iter",
            "extra": "iterations: 6513\ncpu: 108065.04959312154 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 1722452.911330033,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 1722075.4064039423 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 289.62898662747995,
            "unit": "ns/iter",
            "extra": "iterations: 2416673\ncpu: 289.5813815108628 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 22700.19678921175,
            "unit": "ns/iter",
            "extra": "iterations: 31145\ncpu: 22662.912377588742 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 654774.8797468392,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 654681.8860759488 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 286.77752398694713,
            "unit": "ns/iter",
            "extra": "iterations: 2421942\ncpu: 286.75367824663016 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 22144.227665432183,
            "unit": "ns/iter",
            "extra": "iterations: 31599\ncpu: 22141.038482230408 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 711958.6477584548,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 711887.3412625797 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 567.5192420774425,
            "unit": "ns/iter",
            "extra": "iterations: 1234638\ncpu: 567.4507839544879 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 44704.12782193965,
            "unit": "ns/iter",
            "extra": "iterations: 15725\ncpu: 44694.39955484886 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1555457.7973274074,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 1555168.2494432062 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 572.1077024775578,
            "unit": "ns/iter",
            "extra": "iterations: 1226852\ncpu: 572.0480318734457 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 44223.60408757336,
            "unit": "ns/iter",
            "extra": "iterations: 15804\ncpu: 44212.9828524425 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 1668122.6621923991,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 1667950.6756152145 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 423.96150812373645,
            "unit": "ns/iter",
            "extra": "iterations: 1646841\ncpu: 423.90619373697905 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 36627.78133668288,
            "unit": "ns/iter",
            "extra": "iterations: 19107\ncpu: 36622.83189407014 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1116017.0981012627,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1115811.0632911385 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 566.1150423857177,
            "unit": "ns/iter",
            "extra": "iterations: 1221402\ncpu: 565.9907106751106 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 36737.489860582806,
            "unit": "ns/iter",
            "extra": "iterations: 18936\ncpu: 36725.53812843263 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1122474.2427652813,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1122165.085209003 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 859.6176581318327,
            "unit": "ns/iter",
            "extra": "iterations: 815443\ncpu: 859.3870975653737 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 73396.33403273176,
            "unit": "ns/iter",
            "extra": "iterations: 9532\ncpu: 73381.48919429303 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2449470.9285714393,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 2449205.278911564 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 858.7080941611827,
            "unit": "ns/iter",
            "extra": "iterations: 815835\ncpu: 858.5854651982314 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 73298.53962777132,
            "unit": "ns/iter",
            "extra": "iterations: 9564\ncpu: 73279.62672521947 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2338477.074324309,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 2337875.0945945815 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 830.2691081480435,
            "unit": "ns/iter",
            "extra": "iterations: 843122\ncpu: 829.9594305450447 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 53967.73343605573,
            "unit": "ns/iter",
            "extra": "iterations: 12980\ncpu: 53962.55469953759 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 860944.506765081,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 860757.2361623626 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 795.0484276044198,
            "unit": "ns/iter",
            "extra": "iterations: 880758\ncpu: 794.9933807016216 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 53739.65134305444,
            "unit": "ns/iter",
            "extra": "iterations: 13030\ncpu: 53732.055717574774 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 860317.5233415226,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860131.7260442285 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 835.6770879878492,
            "unit": "ns/iter",
            "extra": "iterations: 837002\ncpu: 835.5599102511081 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 53925.83273007317,
            "unit": "ns/iter",
            "extra": "iterations: 12985\ncpu: 53916.90427416249 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 921121.1747066361,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 921028.7548891798 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1629.9714052287627,
            "unit": "ns/iter",
            "extra": "iterations: 429624\ncpu: 1629.7483404092932 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 108866.53794162878,
            "unit": "ns/iter",
            "extra": "iterations: 6510\ncpu: 108855.89846390215 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 1723763.8226600934,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 1723481.1354679933 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}