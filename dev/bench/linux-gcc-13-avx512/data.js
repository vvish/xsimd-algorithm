window.BENCHMARK_DATA = {
  "lastUpdate": 1777018624690,
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
        "date": 1776957477291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3802.3929610491223,
            "unit": "ns/iter",
            "extra": "iterations: 184232\ncpu: 3802.4004027530523 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 245884.8968421042,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245854.8407017543 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3930112.4943819838,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3929096.988764045 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 943.637265532475,
            "unit": "ns/iter",
            "extra": "iterations: 740561\ncpu: 943.6030590322739 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61529.904113200224,
            "unit": "ns/iter",
            "extra": "iterations: 11378\ncpu: 61529.63534891906 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 989665.2788051188,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 989546.8591749656 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3803.3139537410934,
            "unit": "ns/iter",
            "extra": "iterations: 184094\ncpu: 3802.7679446369816 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245693.5821052603,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245664.84315789433 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 3966415.259887027,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3965745.079096044 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1924.5614621412997,
            "unit": "ns/iter",
            "extra": "iterations: 363549\ncpu: 1924.3519745618876 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123232.9862651891,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 123211.0036978342 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2042615.3546511736,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2042207.520348839 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 422.7470362178691,
            "unit": "ns/iter",
            "extra": "iterations: 1655233\ncpu: 422.6932891018979 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 28869.59932883129,
            "unit": "ns/iter",
            "extra": "iterations: 24137\ncpu: 28866.372705804282 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1222230.1636363785,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1222094.7872727287 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 707.5503053373711,
            "unit": "ns/iter",
            "extra": "iterations: 995620\ncpu: 707.5334485044468 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 59163.90554293824,
            "unit": "ns/iter",
            "extra": "iterations: 11889\ncpu: 59156.73437631405 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1911702.2065217278,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 1911464.644021747 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 875.8070146782187,
            "unit": "ns/iter",
            "extra": "iterations: 802004\ncpu: 875.6585889845932 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 69240.14368106922,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 69235.4078721036 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2111282.636094654,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2110797.2189349104 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 3107.2279897390276,
            "unit": "ns/iter",
            "extra": "iterations: 227269\ncpu: 3106.8761951696115 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 122100.3958406166,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 122085.47500873818 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2614131.252873603,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 2613605.996168584 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 485.22072988983,
            "unit": "ns/iter",
            "extra": "iterations: 1445314\ncpu: 485.19929648505604 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 55162.57719999942,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55150.12640000023 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1553059.6835442989,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1552974.5632911443 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 503.90716399999746,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 503.8378190000046 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 53191.19348658937,
            "unit": "ns/iter",
            "extra": "iterations: 12006\ncpu: 53189.67674496075 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1430796.5696465608,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1430469.018711015 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1107.534923554573,
            "unit": "ns/iter",
            "extra": "iterations: 632281\ncpu: 1107.4968028455712 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 109479.01475060805,
            "unit": "ns/iter",
            "extra": "iterations: 6576\ncpu: 109467.47186739648 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3092860.547945235,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 3092180.4840182527 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1377.0786240641235,
            "unit": "ns/iter",
            "extra": "iterations: 508483\ncpu: 1377.0896273818305 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 113377.37342819221,
            "unit": "ns/iter",
            "extra": "iterations: 6044\ncpu: 113372.2413964261 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 3115850.395555526,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 3115303.799999999 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 953.6234255123272,
            "unit": "ns/iter",
            "extra": "iterations: 733175\ncpu: 953.6423555085775 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61765.734173867066,
            "unit": "ns/iter",
            "extra": "iterations: 11342\ncpu: 61762.839181802265 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 1006269.6757532198,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1006099.9411764711 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 914.1425540786756,
            "unit": "ns/iter",
            "extra": "iterations: 765043\ncpu: 914.1441030112036 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61522.54665492907,
            "unit": "ns/iter",
            "extra": "iterations: 11360\ncpu: 61518.087588028066 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 994907.3116147282,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 994833.7776203936 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 957.6749265893495,
            "unit": "ns/iter",
            "extra": "iterations: 731161\ncpu: 957.5743782833131 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62306.45395154784,
            "unit": "ns/iter",
            "extra": "iterations: 11021\ncpu: 62305.45313492473 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1605457.113163961,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 1605116.854503459 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1885.1280966685808,
            "unit": "ns/iter",
            "extra": "iterations: 371165\ncpu: 1885.066797785355 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 122854.316871704,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 122846.5537785589 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2032058.898550755,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2031734.2463768264 ns\nthreads: 1"
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
        "date": 1777018624368,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_std_iota<float>/4096",
            "value": 3819.7985384116832,
            "unit": "ns/iter",
            "extra": "iterations: 183499\ncpu: 3819.433037782223 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/262144",
            "value": 246208.0562983721,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 246208.0394088669 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<float>/4194304",
            "value": 3937106.3202247187,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3936492.539325839 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4096",
            "value": 930.5194832999225,
            "unit": "ns/iter",
            "extra": "iterations: 752003\ncpu: 930.4964780725596 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/262144",
            "value": 61514.03146422945,
            "unit": "ns/iter",
            "extra": "iterations: 11378\ncpu: 61507.84654596592 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<float>/4194304",
            "value": 989349.4624113651,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 989304.1503546099 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4096",
            "value": 3798.3168396889637,
            "unit": "ns/iter",
            "extra": "iterations: 184273\ncpu: 3798.1520461489204 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/262144",
            "value": 245815.46505093205,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 245802.07446434797 ns\nthreads: 1"
          },
          {
            "name": "BM_std_iota<double>/4194304",
            "value": 4019805.2768361405,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 4019403.85875706 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4096",
            "value": 1922.4005105755894,
            "unit": "ns/iter",
            "extra": "iterations: 363903\ncpu: 1922.3395520234803 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/262144",
            "value": 123296.19894366417,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 123287.8440140847 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_arange<double>/4194304",
            "value": 2022669.0231214038,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2022424.3670520245 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4096",
            "value": 423.99345372201304,
            "unit": "ns/iter",
            "extra": "iterations: 1655139\ncpu: 423.9909916931444 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/262144",
            "value": 29046.384941941167,
            "unit": "ns/iter",
            "extra": "iterations: 24027\ncpu: 29043.470762059354 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<float>/4194304",
            "value": 1254553.793286225,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1254458.5371024753 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4096",
            "value": 964.9578979585879,
            "unit": "ns/iter",
            "extra": "iterations: 725333\ncpu: 964.8783248521704 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/262144",
            "value": 63253.30302200254,
            "unit": "ns/iter",
            "extra": "iterations: 10953\ncpu: 63250.30283940471 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<float>/4194304",
            "value": 1223118.0855614822,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1222922.5133689865 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4096",
            "value": 873.0225472920032,
            "unit": "ns/iter",
            "extra": "iterations: 800717\ncpu: 872.986957938949 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/262144",
            "value": 69185.66001215953,
            "unit": "ns/iter",
            "extra": "iterations: 9868\ncpu: 69182.86086339683 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_unary<double>/4194304",
            "value": 2005970.942028922,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2000630.133333337 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4096",
            "value": 1425.566369605498,
            "unit": "ns/iter",
            "extra": "iterations: 490247\ncpu: 1425.1247208040008 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/262144",
            "value": 122867.72501312564,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 122842.5503238227 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_unary<double>/4194304",
            "value": 2524511.9927536873,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2524122.2463768087 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4096",
            "value": 485.1528358728158,
            "unit": "ns/iter",
            "extra": "iterations: 1437300\ncpu: 485.1116524038124 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/262144",
            "value": 58060.598481012064,
            "unit": "ns/iter",
            "extra": "iterations: 11850\ncpu: 58054.23071729948 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<float>/4194304",
            "value": 1342854.8625497853,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1342553.2569721167 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4096",
            "value": 488.6988624151893,
            "unit": "ns/iter",
            "extra": "iterations: 1433036\ncpu: 488.6654975869393 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/262144",
            "value": 56214.27964981808,
            "unit": "ns/iter",
            "extra": "iterations: 12108\ncpu: 56201.12727122607 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<float>/4194304",
            "value": 1359817.874263223,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1359660.5461689553 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4096",
            "value": 1218.5480919670717,
            "unit": "ns/iter",
            "extra": "iterations: 574597\ncpu: 1218.4083453272397 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/262144",
            "value": 108683.21698407758,
            "unit": "ns/iter",
            "extra": "iterations: 6406\ncpu: 108683.05650952249 ns\nthreads: 1"
          },
          {
            "name": "BM_std_transform_binary<double>/4194304",
            "value": 3020523.928270011,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3020470.1350210975 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4096",
            "value": 1580.7176455418964,
            "unit": "ns/iter",
            "extra": "iterations: 442072\ncpu: 1580.5961902133492 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/262144",
            "value": 110304.06446047495,
            "unit": "ns/iter",
            "extra": "iterations: 6376\ncpu: 110283.63001882077 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_transform_binary<double>/4194304",
            "value": 2898126.510373387,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 2898029.410788384 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4096",
            "value": 957.9153275127002,
            "unit": "ns/iter",
            "extra": "iterations: 734170\ncpu: 957.711049212035 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/262144",
            "value": 61689.238120757516,
            "unit": "ns/iter",
            "extra": "iterations: 11196\ncpu: 61689.46775634193 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<float>/4194304",
            "value": 994209.6619115704,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 994084.7960057037 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4096",
            "value": 907.0887460707728,
            "unit": "ns/iter",
            "extra": "iterations: 771144\ncpu: 906.9878505181956 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/262144",
            "value": 61529.0189856748,
            "unit": "ns/iter",
            "extra": "iterations: 11377\ncpu: 61526.160059769325 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<float>/4194304",
            "value": 993850.7602836537,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 993678.2226950321 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4096",
            "value": 958.3780239730563,
            "unit": "ns/iter",
            "extra": "iterations: 731488\ncpu: 958.3935047464921 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/262144",
            "value": 62027.8929431711,
            "unit": "ns/iter",
            "extra": "iterations: 11209\ncpu: 62022.98064055703 ns\nthreads: 1"
          },
          {
            "name": "BM_std_reduce<double>/4194304",
            "value": 1581104.6817102141,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 1580919.995249408 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4096",
            "value": 1870.8689254996743,
            "unit": "ns/iter",
            "extra": "iterations: 374146\ncpu: 1870.727750664181 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/262144",
            "value": 123165.79404510238,
            "unit": "ns/iter",
            "extra": "iterations: 5676\ncpu: 123156.37878787924 ns\nthreads: 1"
          },
          {
            "name": "BM_xsimd_reduce<double>/4194304",
            "value": 2054945.9736069986,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2054490.961876829 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}