<template>
 <div class="platform">
   <div class="plation_box">
     <img src="../../static/img/hhhhhhhh.png" alt=""/>
     <h2>(手机客户端)</h2>
     <div class="spans">
       <span><img src="../../static/img/sssssssss.png" alt="">安卓下载</span>
       <span><img src="../../static/img/ios.png" alt=""/>iOS下载</span>
     </div>
     <div class="erweima">
       <img src="../../static/img/dddddddd.png" alt=""/>
       <h6>扫一扫二维码关注微信公众号</h6>
     </div>
     <div class="platform_box">
       <p>渭华起义数字纪念馆是进行红色文化传播、展示、交流的有效途径，也是纪念馆数字化建设的重要组成部分，不仅可以实现纪念馆内部的数字化陈列，开展社会利用，还可以通过网络传承红色基因，弘扬红色文化。</p>
       <img src="../../static/img/ffffffff.png" alt=""/>
     </div>

   </div>
 </div>
</template>

<script>
    export default {
        name: "platform"
    }
</script>

<style scoped>
  .platform{
    width:100%;
    height:1590px;
    background-image:url("../../static/img/aaaaaaaa.png");
    background-size:cover;
    background-position:0px -60px;
  }
  .plation_box{
    margin:0 auto;
    width:65%;
    padding-top:130px;
    text-align:center;
  }
  .plation_box h2{
    padding-top:40px;
    padding-bottom:71px;
    font-size:30px;
    color:#0D0D0D;
  }
  .spans{
    width:500px;
    margin:0 auto;
    display:flex;
    justify-content: space-around;
  }
  .spans span{
    /*display:block;*/
    width:212px;
    height:57px;
    line-height:57px;
    background: #e23f3f;
    border-radius: 28px;
    color:#fff;
    display:flex;
    align-items: center;
  }
  .spans img{
    padding-left:50px;
    padding-right:15px;
  }
  .erweima{
    height:180px;
    text-align:center;
    margin:57px auto 26px;
    box-sizing: border-box;
  }
  .erweima h6{
    color:#3B4752;
    font-size:14px;
    padding-top:26px;
  }
  .platform_box{
    padding-top:30px;
    margin:0 auto;
  }
  p{
    font-size:18px;
    margin:26px auto;
    color:#3B4752;
    line-height:25px;
    text-indent:36px;
  }
 .platform_box img{
    width:100%;
    display:block;
    margin:0 auto;
  }

</style>
