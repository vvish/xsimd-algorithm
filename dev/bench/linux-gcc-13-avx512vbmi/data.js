window.BENCHMARK_DATA = {
  "lastUpdate": 1776956455554,
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
        "date": 1776956454999,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 5287.458961285885,
            "unit": "ns/iter",
            "extra": "iterations: 133569\ncpu: 5286.045938803165 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 329983.26330664486,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 329923.55534620816 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 5282401.74999999,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 5281748.924242423 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 1264.8655814752206,
            "unit": "ns/iter",
            "extra": "iterations: 553205\ncpu: 1264.8118021348323 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 83086.50165055599,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 83085.97406272106 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 1361897.5186640345,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1361822.4243614916 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 5310.466230854324,
            "unit": "ns/iter",
            "extra": "iterations: 132014\ncpu: 5309.395352008116 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 335024.3778517089,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 334975.2504752851 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 5669954.196721448,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5669684.319672127 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 2523.495649770633,
            "unit": "ns/iter",
            "extra": "iterations: 278606\ncpu: 2523.3529500441514 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 164982.5256654033,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 164965.06653992378 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2992851.3043477493,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 2992461.717391299 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 1993.6661033152222,
            "unit": "ns/iter",
            "extra": "iterations: 351468\ncpu: 1993.568979252734 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 123643.6969429225,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 123631.69482240695 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 7533234.483870941,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7532393.0537634725 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 1806.9624782007565,
            "unit": "ns/iter",
            "extra": "iterations: 387055\ncpu: 1806.6812468512242 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 127960.85289774468,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 127950.63990402354 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 7647962.29347831,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7647142.684782615 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 3866.8328439273505,
            "unit": "ns/iter",
            "extra": "iterations: 181172\ncpu: 3866.279347802094 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 250365.40178890937,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 250341.17567084014 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 5075822.697841617,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 5075170.215827351 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 3800.365936589218,
            "unit": "ns/iter",
            "extra": "iterations: 181168\ncpu: 3800.437273690712 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 256517.8540280853,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 256502.82113821042 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 5340085.060605907,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 5339647.886363645 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 2146.2737036446274,
            "unit": "ns/iter",
            "extra": "iterations: 326068\ncpu: 2146.233521842068 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 144641.1884773635,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 144638.53971193373 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 7873731.146067134,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 7872478.505617999 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 1940.211342476594,
            "unit": "ns/iter",
            "extra": "iterations: 360997\ncpu: 1939.969841854642 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 125983.28826071392,
            "unit": "ns/iter",
            "extra": "iterations: 5554\ncpu: 125972.13485776003 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 7285325.333333444,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 7284294.854166632 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 4026.0815876896063,
            "unit": "ns/iter",
            "extra": "iterations: 174291\ncpu: 4026.0575589100795 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 264160.16811484535,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 264149.4420098218 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 6353188.490908999,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6352500.209090939 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 4072.7811219977825,
            "unit": "ns/iter",
            "extra": "iterations: 171872\ncpu: 4072.8435289052027 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 267819.5949463918,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 267799.04019908345 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 6688216.785046843,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 6687715.205607426 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 3260.648190076843,
            "unit": "ns/iter",
            "extra": "iterations: 214650\ncpu: 3260.6856277661236 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 209781.4765321323,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 209748.37130044747 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 3426599.6934673283,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 3426422.2713567526 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 1219.5895128005197,
            "unit": "ns/iter",
            "extra": "iterations: 573728\ncpu: 1219.5290939260499 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 78048.67425510602,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78049.07075103192 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 1269139.3502722452,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1269024.4228675151 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 3261.6319421455223,
            "unit": "ns/iter",
            "extra": "iterations: 214469\ncpu: 3261.671961915261 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 210456.73631990716,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 210437.77330126413 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 3799791.1891891733,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 3799277.08648647 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 2433.369618617132,
            "unit": "ns/iter",
            "extra": "iterations: 287821\ncpu: 2433.2866886015904 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 156534.27498323744,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156523.01654370676 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2722988.51984119,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 2722775.1230158717 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}