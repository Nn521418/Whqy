<template>
  <div>
    <div class="core_right core_right_02">
      <ul>
        <router-link to="/historydatails">
          <li>
            <img src="../../../static/img/ggg.png" alt="">
            <p>纪念纪念纪念纪念纪念纪念</p>
          </li>
        </router-link>
        <li>
          <img src="../../../static/img/ddd.png" alt="">
          <p>纪念纪念纪念纪念纪念纪念</p>
        </li>
        <li>
          <img src="../../../static/img/nn.png" alt="">
          <p>纪念纪念纪念纪念纪念纪念</p>
        </li>
        <li>
          <img src="../../../static/img/ggg.png" alt="">
        </li>
        <li>
          <img src="../../../static/img/ddd.png" alt="">
        </li>
        <li>
          <img src="../../../static/img/nn.png" alt="">
        </li>
      </ul>
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
    name: "History"
  }
</script>

<style scoped>
  .pages {
    margin:20px auto;
  }

  .core_right_02 {
    position: relative;
    padding-bottom:20px;
    margin-bottom: 45px;
    text-align: center;
  }

  ul {
    padding:20px 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  li {
    width: 280px;
    height: 266px;
    background: #f3f8fa;
   margin-bottom:15px;
  }

  p {
    color: #434d53;
    font-size: 15px;
    margin-top: 5px;
  }

  img {
    width: 280px;
    height: 216px;
  }
</style>
