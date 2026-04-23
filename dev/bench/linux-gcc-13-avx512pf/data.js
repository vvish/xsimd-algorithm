window.BENCHMARK_DATA = {
  "lastUpdate": 1776956460484,
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
      }
    ]
  }
}