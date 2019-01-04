<template>
  <div class="coreright coreright_01">
    <div class="coreright_01_flex">
      <div>
        <img src="../../../static/img/111.png" alt="">
        <span>渭华起义工农红军使用过的土铁枪</span>
      </div>
      <div>
        <img src="../../../static/img/22.png" alt="">
        <span>《清明革命动乱大地图》</span>
      </div>
      <div>
        <img src="../../../static/img/33.png" alt="">
        <span>熊秉坤姓名印</span>
      </div>
      <div>
        <img src="../../../static/img/44.png" alt="">
        <span>中立布告照片</span>
      </div>
      <div>
        <img src="../../../static/img/55.png" alt="">
        <span>皮箱</span>
      </div>
      <div>
        <img src="../../../static/img/66.png" alt="">
        <span>熊秉坤姓名印</span>
      </div>
      <div>
        <img src="../../../static/img/77.png" alt="">
        <span>光复纪念章</span>
      </div>
      <div>
        <img src="../../../static/img/88.png" alt="">
        <span>粉彩双旗纹九子碟</span>
      </div>
      <div>
        <img src="../../../static/img/99.png" alt="">
        <span>山水人物图索耳花盆</span>
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
        name: "priducts"
    }
</script>

<style scoped>
  .pages {
    position:absolute;
    left:50%;
    bottom:30px;
    transform: translateX(-50%);
  }
  .coreright_01 {
    position:relative;
    background: #fff;
    padding-top:20px;
    width: calc(100% - 224px);
    height: 1449px;
    margin-bottom: 48px;
     float:left;}

  .coreright_01_flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .coreright_01_flex div{
    width:30%;
    margin-bottom:20px;
  }
  .coreright_01 img {
    display: block;
    width:100%;
  }

  .coreright_01 span {
    display: block;
    color: #58626f;
    font-size: 12px;
    height: 48px;
    line-height: 48px;
    width: 100%;
    text-align: center;
    background: #F5FAFC; }
</style>
