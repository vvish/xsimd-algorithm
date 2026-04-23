window.BENCHMARK_DATA = {
  "lastUpdate": 1776956469505,
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
        "date": 1776956468577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3326.989590648315,
            "unit": "ns/iter",
            "extra": "iterations: 209331\ncpu: 3326.702824713012 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 215205.38778016463,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 215173.74608535468 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3443637.0447761123,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 3443318.0746268644 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 814.8345489827972,
            "unit": "ns/iter",
            "extra": "iterations: 858526\ncpu: 814.6589946023767 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 53718.75435633715,
            "unit": "ns/iter",
            "extra": "iterations: 13027\ncpu: 53707.90596453516 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 860970.4243542469,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 860765.391143912 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3328.269303416576,
            "unit": "ns/iter",
            "extra": "iterations: 210183\ncpu: 3327.7832745750156 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 214912.14092723603,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 214857.78599938613 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3571662.03940887,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 3571425.162561581 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1684.2854585828375,
            "unit": "ns/iter",
            "extra": "iterations: 415661\ncpu: 1684.13237710538 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 107563.01412993453,
            "unit": "ns/iter",
            "extra": "iterations: 6511\ncpu: 107532.36446014434 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 1724180.2857142969,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 1723920.3990147822 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 563.9909163674922,
            "unit": "ns/iter",
            "extra": "iterations: 1233097\ncpu: 563.9281005468348 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 36699.33513848095,
            "unit": "ns/iter",
            "extra": "iterations: 19389\ncpu: 36689.9535303522 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 750774.1670258549,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 750735.0980603438 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 853.1572530921943,
            "unit": "ns/iter",
            "extra": "iterations: 827971\ncpu: 853.0772297580477 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 54687.84174474504,
            "unit": "ns/iter",
            "extra": "iterations: 12701\ncpu: 54681.90142508458 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 931406.2878179315,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 931233.5261044176 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 1127.1436054741991,
            "unit": "ns/iter",
            "extra": "iterations: 622337\ncpu: 1127.1521426493994 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 72100.09304967496,
            "unit": "ns/iter",
            "extra": "iterations: 9683\ncpu: 72097.55767840546 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1550645.8299776549,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 1550382.2080536904 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 1184.3192705999602,
            "unit": "ns/iter",
            "extra": "iterations: 591445\ncpu: 1184.2428002603783 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 82380.76134493451,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82368.37926169751 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2082594.0267857204,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2082312.7946428556 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 422.256593172821,
            "unit": "ns/iter",
            "extra": "iterations: 1657055\ncpu: 422.24731466366495 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 36726.98596657184,
            "unit": "ns/iter",
            "extra": "iterations: 19026\ncpu: 36723.486387049335 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1126946.2405892005,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1126624.4631751264 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 572.4031381303971,
            "unit": "ns/iter",
            "extra": "iterations: 1238062\ncpu: 572.3451297269448 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 36457.27827760153,
            "unit": "ns/iter",
            "extra": "iterations: 19229\ncpu: 36453.80695824004 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1151030.0612582604,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1150893.511589405 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1122.8255608796703,
            "unit": "ns/iter",
            "extra": "iterations: 622326\ncpu: 1122.6516648830361 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 75317.29808809528,
            "unit": "ns/iter",
            "extra": "iterations: 9467\ncpu: 75311.3230167952 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2614634.0037313257,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 2614472.2425373006 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1135.9556743806459,
            "unit": "ns/iter",
            "extra": "iterations: 610234\ncpu: 1135.9219905806626 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 75941.49035248588,
            "unit": "ns/iter",
            "extra": "iterations: 9277\ncpu: 75933.80047429081 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2587084.7499999576,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 2586381.1679104394 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 832.7685340848394,
            "unit": "ns/iter",
            "extra": "iterations: 841679\ncpu: 832.7304209799618 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 54075.053561740206,
            "unit": "ns/iter",
            "extra": "iterations: 12901\ncpu: 54065.48817921091 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 863298.7200986479,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 863100.0616522845 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 796.8509703384381,
            "unit": "ns/iter",
            "extra": "iterations: 876859\ncpu: 796.7592874110913 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 53762.73321038871,
            "unit": "ns/iter",
            "extra": "iterations: 13014\ncpu: 53759.1313201165 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 861087.1440886814,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 861066.7623152675 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 836.085534433438,
            "unit": "ns/iter",
            "extra": "iterations: 837195\ncpu: 836.0658066519746 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 54088.88958381696,
            "unit": "ns/iter",
            "extra": "iterations: 12951\ncpu: 54085.8054976454 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 946580.9512855128,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946356.2503382904 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1630.6756218812332,
            "unit": "ns/iter",
            "extra": "iterations: 429061\ncpu: 1630.6551958812493 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 107484.68484103466,
            "unit": "ns/iter",
            "extra": "iterations: 6511\ncpu: 107473.64014744313 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 1724399.9876846736,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 1724141.561576347 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}