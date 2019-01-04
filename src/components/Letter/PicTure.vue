<template>
    <div>
      <!--图文经过-->
      <div class="core_right core_right_02">
        <ul>
          <li>
            <img src="../../../static/img/l.png" alt="">
          </li>
          <li>
            <img src="../../../static/img/l.png" alt="">
          </li>
          <li style="margin-right: 0">
            <img src="../../../static/img/l.png" alt="">
          </li>
          <li>
            <img src="../../../static/img/l.png" alt="">
          </li>
          <li>
            <img src="../../../static/img/l.png" alt="">
          </li>
          <li style="margin-right: 0">
            <img src="../../../static/img/l.png" alt="">
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
        name: "PicTure"
    }
</script>

<style scoped>
  .pages{
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 128px;
  }
  .core_right_02{
    min-height: 927px;
    margin-bottom: 45px;
    text-align: center;
    position:relative;
  }
  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:20px 10px 20px;
  }
  li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 32%;
    height: 165px;
    background: #ffffff;
    /*box-shadow:0px 0px 2px 8px rgba(0,0,0,.2);*/
    box-shadow:  0px 0px 16px rgba(0,0,0,.1);
    /*margin: 0 22px 22px 0;*/
  }
img{
  width:100%;
  height:100%;
  border: 0;
  display: inline-block;
}
</style>
