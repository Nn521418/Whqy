<template>
  <div>
    <img src="../../../static/img/ppppp.png" alt="" class="overview_banner">
    <div class="matter">
      <div class="title">
        <h3>写在渭华起义九十年前夕：渭华起义革命精神永放光芒</h3>
        <i></i>
      </div>
      <div class="imgs">
        <img src="../../../static/img/vedio.png" alt=""><br/>
      </div>
      <p>
        口述历史是融合历史学、文学、新闻学、档案学的一门综合学科，主要是运用笔录、录音、
        录像等方式记述和保存亲历者和见证者对历史事件的回忆口述，以此发掘、记录和研究史。
        口述历史有别于传统的物传、言传、文传，是记录和研究历史的新形式，使史学研究的视野
        已从单纯文献求证，转向社会资料的发掘。口述历史的重要应用之一就是抢救历史资料，为
        近现代史研究提供资料。《习仲勋
      </p>
      <p>
        习仲勋同志出生于 1913 年 10 月。他 13 岁参加革命，18 岁组织发动“两当兵变”，19 岁与刘
        志丹等同志创建照金陕甘边区革命根据地，21 岁当选为陕甘边区苏维埃政府主席，是“娃娃
        主席”。后来在错误肃反中被王明路线执行者关押，党中央和毛主席到达陕北后才得以释放
        平反。抗战期间，他先后守卫陕甘宁边区南大门和北大门。抗战胜利后，他任西北局书记，
        时年 32 岁。解放战
      </p>
      <div class="imgs">
        <img src="../../../static/img/lllll.png" alt="">
      </div>
      <p>
        口述历史是融合历史学、文学、新闻学、档案学的一门综合学科，主要是运用笔录、录音、
        录像等方式记述和保存亲历者和见证者对历史事件的回忆口述，以此发掘、记录和研究史。
        口述历史有别于传统的物传、言传、文传，是记录和研究历史的新形式，使史学研究的视野
        已从单纯文献求证，转向社会资料的发掘。口述历史的重要应用之一就是抢救历史资料，为
        近现代史研究提供资料。《习仲勋
      </p>
      <p>
        习仲勋同志出生于 1913 年 10 月。他 13 岁参加革命，18 岁组织发动“两当兵变”，19 岁与刘
        志丹等同志创建照金陕甘边区革命根据地，21 岁当选为陕甘边区苏维埃政府主席，是“娃娃
        主席”。后来在错误肃反中被王明路线执行者关押，党中央和毛主席到达陕北后才得以释放
        平反。抗战期间，他先后守卫陕甘宁边区南大门和北大门。抗战胜利后，他任西北局书记，
        时年 32 岁。解放战
      </p>
    </div>
    <el-pagination
      class="pages"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <div class="time">
      <img src="../../../static/img/jjjjj.png" alt="">
      <!--小计时器-->
      <!--<input type="text" id="timetext" value="00时00分00秒" readonly>-->
      <!--<button type="button" @click="start()">开始</button>-->
    </div>

  </div>
</template>

<script>
  import Time from './Time'

  export default {
    name: "ClassDatails",
    components: {
      Time
    },
    mounted() {

    },
    methods: {

      // start() {
      //   var int;
      //   int = setInterval(this.timer(), 50);
      //   int = setInterval(this.timer, 50);
      // },
      // timer(){
      //   var hour, minute, second;//时 分 秒
      //   hour = minute = second = 0;//初始化
      //   var millisecond = 0;//毫秒
      //   var int;
      //   int = setInterval(this.timer(), 50);
      //   millisecond = millisecond + 50;
      //   if (millisecond >= 1000) {
      //     millisecond = 0;
      //     second = second + 1;
      //   }
      //   if (second >= 60) {
      //     second = 0;
      //     minute = minute + 1;
      //   }
      //
      //   if (minute >= 60) {
      //     minute = 0;
      //     hour = hour + 1;
      //   }
      //   document.getElementById('timetext').value = hour + '时' + minute + '分' + second + '秒';
      //
      // }
    }
  }
</script>

<style scoped>
  .pages {
    /*position: absolute;*/
    /*bottom: 48px;*/
    /*left: 30%;*/
    margin-top: 63px;
    margin-bottom: 70px;
    text-align: center;
  }

  .matter {
    width: 70%;
    margin: 0 auto;
  }

  .matter p {
    text-align: left;
    line-height: 25px;
    font-size: 15px;
    color: #667074;
    text-indent: 32px;
    margin-bottom: 46px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /*border-bottom: 1px solid #d1d1d1;*/
    margin-bottom: 42px;
  }

  .title i {
    margin: 0 auto;
    width: 136px;
    border: 1px solid #e3e3e3;
  }

  .matter h2 {
    text-align: left;
    font-size: 18px;
    color: #444e53;
    font-weight: 600;
    margin-top: 42px;
  }

  .matter h3 {
    font-weight: 600;
    color: #444e54;
    font-size: 20px;
    text-align: center;
    margin: 47px 0 21px;
    /*padding-bottom: 18px;*/
    /*width: 411px;*/
    /*border-bottom: 1px solid #d1d1d1;*/
  }

  .imgs {
    width: 100%;
    text-align: center;
    margin: 44px 0 34px;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
  }
  /*.imgs img{*/
    /*width:216px;*/
  /*}*/
  .imgs i {
    display: block;
    margin-top: 21px;
    font-size: 12px;
    color: #585858;
  }
</style>
