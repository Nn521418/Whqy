<template>
  <div class="coreright coreright_02">
    <div class="coreright_02_box">
      <img src="../../../static/img/iiiiii.png" alt=""/>
      <div>
        <h5>中共华县县委办公楼旧址</h5>
        <p>
          纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪念馆干部职工一致表示，
          要坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/iiiiii.png" alt=""/>
      <div>
        <h5>十五个砖铺大字 </h5>
        <p>
          砖铺字所在地起义当年是原高塘小学群体建筑中的校园中心道路，也是纪念馆的中心位置。 一九二七年十一月，
          共产干部职工一致表示，要 坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，
          这里地 势挺拔，山清水...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/iiiiii.png" alt=""/>
      <div>
        <h5>西北工农革命军军委扩大会议遗址 </h5>
        <p>
          纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪 念馆干部职工一致表示，
          要坚定文化自信，夯实 阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀， 风景宜人...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/iiiiii.png" alt=""/>
      <div>
        <h5>烈士殉难井 </h5>
        <p>
          砖铺字所在地起义当年是原高塘小学群体建筑中的校园中心道路，也是纪念馆的中心位置。 一九二七年十一月，
          共产干部职工一致表示，要 坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，
          这里地 势挺拔，山清水...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/iiiiii.png" alt=""/>
      <div>
        <h5>西北工农革命军军委扩大会议遗址 </h5>
        <p>
          纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪念馆干部职工一致表示，
          要坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/iiiiii.png" alt=""/>
      <div>
        <h5>十五个砖铺大字 </h5>
        <p>
          砖铺字所在地起义当年是原高塘小学群体建筑中的校园中心道路，也是纪念馆的中心位置。 一九二七年十一月，
          共产干部职工一致表示，要 坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，
          这里地 势挺拔，山清水...
        </p>
      </div>
    </div>
    <el-pagination
      class="pages"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "CulturalStory"
  }
</script>

<style scoped>
  .pages{
    text-align: center;
    margin-top: 80px;
    margin-bottom: 47px;
  }

  .coreright {
    width:calc(100% - 224px);
    background: #fff;
    float: left;
    padding-top: 36px;
    padding-left: 46px;
    padding-right: 46px;
    margin-bottom: 48px;
    box-sizing: border-box; }
  .coreright_02 {
    float:left;
    height: 1040px;
    padding-top: 40px;
    padding-left: 46px;
  }
  .coreright_02 .coreright_02_box {
    border: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    margin-bottom: 27px; }
  .coreright_02 .coreright_02_box img {
    display:inline-block;
    width: 95px;
    height: 100px;
    line-height:100%;
    padding-left: 8px;
    padding-right: 20px;
  }
  .coreright_02 .coreright_02_box div {
    width:calc(100% - 123px);
    display: flex;
    flex-direction: column;
    /*padding-right: 15px;*/
  }
  .coreright_02 .coreright_02_box div h5 {
    padding-top: 25px;
    padding-bottom: 7px;
    font-size: 14px;
    color: #39424D; }
  .coreright_02 .coreright_02_box div p {
    font-size: 12px;
    line-height: 24px;
    color: #7A8790; }

</style>
