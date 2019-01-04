<template>
  <div class="core_right_02">
    <div class="core_right">
      <div class="masonry">
        <div class="item">
          <img src="../../../static/img/eee.png" alt="">
          <p>习仲勋同志韶山题词</p>
        </div>
        <div class="item">
          <img src="../../../static/img/rrr.png" alt="">
          <p>习仲勋同志韶山题词</p>

        </div>
        <div class="item">
          <img src="../../../static/img/ttt.png" alt="">
          <p>习仲勋同志韶山题词</p>

        </div>
        <div class="item">
          <img src="../../../static/img/yyy.png" alt="">
          <p>习仲勋同志韶山题词</p>

        </div>
        <div class="item">
          <img src="../../../static/img/eee.png" alt="">
          <p>习仲勋同志韶山题词</p>

        </div>
        <div class="item">
          <img src="../../../static/img/iii.png" alt="">
          <p>习仲勋同志韶山题词</p>

        </div>
      </div>
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Words"
  }
</script>

<style scoped>
  .pages{
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 110px;
  }
  .core_right{
    position: relative;
    margin-bottom: 48px;
    display: flex;
  }
  .core_right_02{
    width:calc(100% - 224px);
    background:#fff;
    margin-bottom:20px;
  }
  .masonry {
    background: #fff;
    display: flex;
    /*flex-flow: column wrap;*/
    flex-wrap:wrap;
    justify-content: space-between;
    padding:20px 20px;
    box-sizing: border-box;
    margin-bottom:80px;
    width:100%;
  }
  .item{
    text-align: center;
    margin-bottom: 10px;
    display:block;
  }
  .item p{
    margin-bottom: 10px;
    background: #f1f5f7;
  }
</style>
