<template>
  <div class="coreright_02">
    <div class="coreright_02_box">
      <img src="../../../static/img/story.png" alt=""/>
      <div>
        <h5>中共华县县委办公楼旧址</h5>
        <p>
          纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪念馆干部职工一致表示，
          要坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/story.png" alt=""/>
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
      <img src="../../../static/img/story.png" alt=""/>
      <div>
        <h5>西北工农革命军军委扩大会议遗址 </h5>
        <p>
          纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪 念馆干部职工一致表示，
          要坚定文化自信，夯实 阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀， 风景宜人...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/story.png" alt=""/>
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
      <img src="../../../static/img/story.png" alt=""/>
      <div>
        <h5>西北工农革命军军委扩大会议遗址 </h5>
        <p>
          纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪念馆干部职工一致表示，
          要坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人...
        </p>
      </div>
    </div>
    <div class="coreright_02_box">
      <img src="../../../static/img/story.png" alt=""/>
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
  .pages {
    position:absolute;
    left:50%;
    bottom:30px;
    transform: translateX(-50%);
  }
  .coreright_02 {
    position:relative;
    width:calc(100% - 224px);
    background: #fff;
    float: left;
    padding:20px 20px 50px;
    box-sizing: border-box;
    margin-bottom:20px;
  }
  .coreright_02_box {
    border: 1px solid #ebebeb;
    display: flex;
    padding-bottom:10px;
    margin-bottom: 27px;
  }
  .coreright_02 .coreright_02_box img {
    width: 95px;
    height: 100px;
    padding-top: 5px;
    padding-left: 8px;
    padding-right: 20px; }
  .coreright_02 .coreright_02_box div {
    display: flex;
    flex-direction: column;
    padding-right: 15px; }
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
