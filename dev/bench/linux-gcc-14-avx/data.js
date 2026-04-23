window.BENCHMARK_DATA = {
  "lastUpdate": 1776956497715,
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
      }
    ]
  }
}