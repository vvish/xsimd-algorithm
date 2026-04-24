window.BENCHMARK_DATA = {
  "lastUpdate": 1777018589790,
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
        "date": 1776957486145,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3807.167971039716,
            "unit": "ns/iter",
            "extra": "iterations: 184252\ncpu: 3807.081990968891 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245999.2654711703,
            "unit": "ns/iter",
            "extra": "iterations: 2844\ncpu: 245944.38255977488 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3938239.2808988695,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3937810.3258426953 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 951.4803820841678,
            "unit": "ns/iter",
            "extra": "iterations: 736801\ncpu: 951.4603088215132 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61725.319006518155,
            "unit": "ns/iter",
            "extra": "iterations: 11354\ncpu: 61721.810287123386 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 998192.1824611056,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 997986.0523338069 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3815.69591537074,
            "unit": "ns/iter",
            "extra": "iterations: 183199\ncpu: 3815.630991435536 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246636.62935585945,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 246611.77402323126 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3974333.7613636404,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 3973586.250000004 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1923.299026456176,
            "unit": "ns/iter",
            "extra": "iterations: 363620\ncpu: 1923.161910785984 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123274.13292253617,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 123271.90228873237 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2063704.5623188438,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2063608.4231884042 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 423.0129854252163,
            "unit": "ns/iter",
            "extra": "iterations: 1652237\ncpu: 422.98608371559226 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 56010.58520110526,
            "unit": "ns/iter",
            "extra": "iterations: 13028\ncpu: 56005.222443966755 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1157944.6138279925,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1157780.3709949444 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 664.7601517122769,
            "unit": "ns/iter",
            "extra": "iterations: 1053837\ncpu: 664.761608294261 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 55682.57296783489,
            "unit": "ns/iter",
            "extra": "iterations: 12622\ncpu: 55670.196006971964 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1912287.8837837763,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 1912036.443243239 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 1320.9831611090733,
            "unit": "ns/iter",
            "extra": "iterations: 544929\ncpu: 1320.7262836075872 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 86092.7925493931,
            "unit": "ns/iter",
            "extra": "iterations: 8402\ncpu: 86085.19233515832 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2110920.1950464807,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2110328.5789473723 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 2330.6700467017636,
            "unit": "ns/iter",
            "extra": "iterations: 303843\ncpu: 2330.307701674879 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 112281.52142292481,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 112256.4140711459 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2579671.2014652025,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 2579082.304029302 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 649.2205717587073,
            "unit": "ns/iter",
            "extra": "iterations: 1083534\ncpu: 649.1028855578134 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 53754.26396339595,
            "unit": "ns/iter",
            "extra": "iterations: 12676\ncpu: 53750.178053013784 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1357350.6119402964,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1357278.9832089585 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 488.65103615968167,
            "unit": "ns/iter",
            "extra": "iterations: 1432839\ncpu: 488.60610787394904 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 55079.00835945697,
            "unit": "ns/iter",
            "extra": "iterations: 12441\ncpu: 55078.92653323672 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1406016.50920246,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1405825.0204498984 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1021.9533107283919,
            "unit": "ns/iter",
            "extra": "iterations: 683626\ncpu: 1021.9453780283417 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 103501.80198019883,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 103488.48027190783 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3269356.5915492834,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3268843.3145539756 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1316.1889164841182,
            "unit": "ns/iter",
            "extra": "iterations: 532701\ncpu: 1316.1864141422654 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 106347.61927034665,
            "unit": "ns/iter",
            "extra": "iterations: 6414\ncpu: 106338.6292485189 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3013832.3668122105,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 3013234.9039301546 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 954.1364177989492,
            "unit": "ns/iter",
            "extra": "iterations: 733482\ncpu: 954.1408814394936 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61918.99469917846,
            "unit": "ns/iter",
            "extra": "iterations: 11319\ncpu: 61905.77250640477 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1000370.120910382,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1000161.3669985766 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 913.051157476911,
            "unit": "ns/iter",
            "extra": "iterations: 765890\ncpu: 912.9256877619481 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61704.697300149535,
            "unit": "ns/iter",
            "extra": "iterations: 11371\ncpu: 61702.83255650348 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 991287.709631738,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991176.1515580823 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 957.9892184431985,
            "unit": "ns/iter",
            "extra": "iterations: 730785\ncpu: 957.9087255485572 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62198.21837443159,
            "unit": "ns/iter",
            "extra": "iterations: 11233\ncpu: 62195.68441200045 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1641149.7011764662,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 1640847.2235293996 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1861.3817181728675,
            "unit": "ns/iter",
            "extra": "iterations: 376330\ncpu: 1861.2876703956763 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123134.66818820179,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 123047.30372191001 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2047766.6279069833,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2047604.0029069846 ns\nthreads: 1"
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
        "date": 1777018589305,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3800.7280230221477,
            "unit": "ns/iter",
            "extra": "iterations: 184170\ncpu: 3800.3235869034033 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 246484.89318342006,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 246467.4371047084 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3935450.6123595554,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3935025.393258427 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.6649373505563,
            "unit": "ns/iter",
            "extra": "iterations: 751164\ncpu: 930.6454209733157 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61667.99242891047,
            "unit": "ns/iter",
            "extra": "iterations: 11359\ncpu: 61657.69345893118 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 987323.2376933825,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 987120.7876230649 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3802.655267233673,
            "unit": "ns/iter",
            "extra": "iterations: 184015\ncpu: 3801.8483493193503 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 246385.71231909492,
            "unit": "ns/iter",
            "extra": "iterations: 2833\ncpu: 246321.38157430274 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3956784.6384181106,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3955454.299435021 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1923.4583719300197,
            "unit": "ns/iter",
            "extra": "iterations: 363805\ncpu: 1923.2103132172451 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123269.05801445797,
            "unit": "ns/iter",
            "extra": "iterations: 5671\ncpu: 123265.31652265937 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2014659.8218390679,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2014652.7902298877 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 422.76151255341614,
            "unit": "ns/iter",
            "extra": "iterations: 1657039\ncpu: 422.7221447413143 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 29172.289932438216,
            "unit": "ns/iter",
            "extra": "iterations: 23978\ncpu: 29171.954958712147 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1127619.6222961925,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1127572.4991680514 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 1147.7103397403753,
            "unit": "ns/iter",
            "extra": "iterations: 614116\ncpu: 1147.6966061786352 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 57338.62234170654,
            "unit": "ns/iter",
            "extra": "iterations: 12461\ncpu: 57330.558301902 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1935774.2981029723,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 1935552.2845528375 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 1252.768178325984,
            "unit": "ns/iter",
            "extra": "iterations: 563597\ncpu: 1252.688241775594 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 112145.40608141154,
            "unit": "ns/iter",
            "extra": "iterations: 6117\ncpu: 112143.10936733706 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 1904857.5042979813,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 1904719.6389684828 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 2021.078233703126,
            "unit": "ns/iter",
            "extra": "iterations: 345695\ncpu: 2021.003482838927 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 206284.77891654253,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 206283.25124450895 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2553195.08071746,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 2553041.645739916 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 484.997729030391,
            "unit": "ns/iter",
            "extra": "iterations: 1444317\ncpu: 484.9297349543078 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 65254.213278720315,
            "unit": "ns/iter",
            "extra": "iterations: 10498\ncpu: 65249.33787388097 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1341153.380497136,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1340972.1032504754 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 489.8630851794947,
            "unit": "ns/iter",
            "extra": "iterations: 1420248\ncpu: 489.8666479375429 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 67633.35871271578,
            "unit": "ns/iter",
            "extra": "iterations: 10192\ncpu: 67624.63726452141 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1303717.6309314615,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1303711.374340946 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1005.8667229430364,
            "unit": "ns/iter",
            "extra": "iterations: 694193\ncpu: 1005.8146653740438 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 105819.84494720951,
            "unit": "ns/iter",
            "extra": "iterations: 6630\ncpu: 105823.05565610887 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 2957034.6451612688,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 2956799.9153225766 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1331.8060502566095,
            "unit": "ns/iter",
            "extra": "iterations: 540506\ncpu: 1331.551037361285 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 106429.38570991425,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 106432.84470624257 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2790758.4315352826,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 2790549.692946077 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 952.6695272194869,
            "unit": "ns/iter",
            "extra": "iterations: 734823\ncpu: 952.6638278878038 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 62109.37536604864,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 62102.36081284961 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 991835.7606837472,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 991699.4173789136 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 906.9156666338243,
            "unit": "ns/iter",
            "extra": "iterations: 771308\ncpu: 906.8876583673467 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61586.7740028248,
            "unit": "ns/iter",
            "extra": "iterations: 11332\ncpu: 61587.3828097419 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 986528.4519774069,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986459.2711864428 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 959.2671811416415,
            "unit": "ns/iter",
            "extra": "iterations: 730583\ncpu: 959.3136864668372 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62263.04648897603,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 62260.62118126301 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1450299.976842099,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1450149.5894736955 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1871.1348420883714,
            "unit": "ns/iter",
            "extra": "iterations: 374260\ncpu: 1871.079124138296 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123384.22188826,
            "unit": "ns/iter",
            "extra": "iterations: 5656\ncpu: 123387.17521216447 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2035831.7565217516,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2035454.049275356 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}