<template>
  <div class="coreright coreright_03">
    <div class="coreright_03_flex">
      <div class="coreright_03_box">
        <div>
          <img src="../../../static/img/1.1.png" alt="">
          <span>赵和民回忆渭华暴动留影</span>
        </div>
        <div>
          <img src="../../../static/img/1.4.png" alt="">
          <span>张宗逊渭华起义60周年在工作人员陪同下留影</span>
        </div>
      </div>
      <div class="coreright_03_box">
        <div>
          <img src="../../../static/img/1.2.png" alt="">
          <span>张宗逊渭华起义60周年在工作人员陪同下留影</span>
        </div>
        <div>
          <img src="../../../static/img/1.5.png" alt="">
          <span>赵和民回忆渭华暴动留影</span>
        </div>
      </div>
      <div class="coreright_03_box">
        <div>
          <img src="../../../static/img/1.3.png" alt="">
          <span>胡绳与战友合影，不经感叹“苍苍山色望无穷，似见红旗翠霭中。十万农奴齐举戟，陂南陌尽英雄</span>
        </div>
        <div>
          <img src="../../../static/img/1.6.png" alt="">
          <span>赵和民回忆渭华暴动留影</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "souvenir"
    }
</script>

<style scoped>
  .coreright {
    width: calc(100% - 224px);
    background: #fff;
    float: left;
    padding-top: 36px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box; }
  .coreright_03 {
    height: 850px;
    margin-bottom: 48px;
    justify-content: space-between; }

  .coreright_03_flex {
    display: flex;
    justify-content: space-around;
  }

  .coreright_03_box {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 30%;
    float: left; }

  .coreright_03 img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto; }

  .coreright_03 span {
    display: block;
    color: #58626f;
    line-height: 24px;
    padding: 12px 15px;
    font-size: 12px;
    width: 100%;
    box-sizing: border-box;
    text-align: center; }

</style>
