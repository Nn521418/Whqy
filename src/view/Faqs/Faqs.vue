<template>
  <div>
    <img src="../../../static/img/zzzzz.png" alt="" class="overview_banner">
    <div class="matter">
      <ul>
        <router-link to="/answer">
          <li>
            <img src="../../../static/img/word.png" alt="">
            <img class="answer" src="../../../static/img/ccccc.png" alt="">
            <img class="AFQ" src="../../../static/img/AFQ.png" alt="">
            <p>试题1</p>
          </li>
        </router-link>
        <li>
          <img src="../../../static/img/word.png" alt="">
          <img class="answer" src="../../../static/img/ccccc.png" alt="">
          <img class="AFQ" src="../../../static/img/AFQ.png" alt="">
          <p>试题1</p>
        </li>
        <li>
          <img src="../../../static/img/word.png" alt="">
          <img class="answer" src="../../../static/img/ccccc.png" alt="">
          <img class="AFQ" src="../../../static/img/AFQ.png" alt="">
          <p>试题1</p>
        </li>
        <li>
          <img src="../../../static/img/word.png" alt="">
          <img class="answer" src="../../../static/img/ccccc.png" alt="">
          <img class="AFQ" src="../../../static/img/AFQ.png" alt="">
          <p>试题1</p>
        </li>
        <li>
          <img src="../../../static/img/word.png" alt="">
          <img class="answer" src="../../../static/img/ccccc.png" alt="">
          <img class="AFQ" src="../../../static/img/AFQ.png" alt="">
          <p>试题1</p>
        </li>
      </ul>

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
    name: "Faqs"
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
  .matter ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .matter li{
    position: relative;
    text-align: center;
    /*width: 218px;*/
    height: 268px;
    float: left;
    margin-bottom: 60px;
  }
  .matter p{
    margin-top: 22px;
  }
  .answer{
    position: absolute;
    left: 0;
    top: -10%;
  }
  .AFQ{
    position: absolute;
    top: 20%;
    left: 42%;
  }

</style>
