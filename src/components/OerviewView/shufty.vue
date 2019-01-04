<template>
  <!-- 景区掠影 -->
  <div class="core_right core_right_02">
    <div class="core_right_imgs">
      <p>{{content[2].content}}</p>
      <!--<img src="../../../static/img/1.png" alt=""/>-->
      <!--<img src="../../../static/img/2.png" alt=""/>-->
      <!--<img src="../../../static/img/3.png" alt=""/>-->
      <!--<img src="../../../static/img/4.png" alt=""/>-->
      <!--<img src="../../../static/img/5.png" alt=""/>-->
      <!--<img src="../../../static/img/6.png" alt=""/>-->
      <!--<img src="../../../static/img/7.png" alt=""/>-->
      <!--<img src="../../../static/img/8.png" alt=""/>-->
      <!--<img src="../../../static/img/9.png" alt=""/>-->
      <!--<img src="../../../static/img/10.png" alt=""/>-->
      <!--<img src="../../../static/img/11.png" alt=""/>-->
      <!--<img src="../../../static/img/12.png" alt=""/>-->
      <!--<img src="../../../static/img/13.png" alt=""/>-->
      <!--<img src="../../../static/img/14.png" alt=""/>-->
      <!--<img src="../../../static/img/15.png" alt=""/>-->

    </div>
  </div>
</template>

<script>
    export default {
        name: "shufty",
        props:['content']
    }
</script>

<style scoped>
  .core_right{
    width:calc(100% - 224px);
    background:#fff;
    float:left;
    padding-left:50px;
    padding-right:50px;
    margin-bottom:20px;
    box-sizing: border-box;
  }
  .core_right h3{
    text-align: center;
    font-size:20px;
    color:#40454c;
    margin-top:44px;
    margin-bottom:36px;
  }
  .core_right p{
    font-size:14px;
    color:#5c6168;
    text-indent: 28px;
    line-height:30px;
  }
  .core_right_02{
    height:1280px;
    padding-top:55px;
  }
  .core_right_02 img{
    width:273px;
    height:188px;
    padding-bottom:30px;
  }
  .core_right_imgs{
    width:875px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
