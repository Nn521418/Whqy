<template>
  <div>
    <img src="../../../static/img/kkkkkk.png" alt="" class="overview_banner"/>

    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">服务指南</p>
          <ul class="lists">
            <router-link to="/handbook/ticket">
              <li class="scenic_one" style="border-left: 4px solid #e23f3f">门票预定</li>
            </router-link>

            <router-link to="/handbook/tions">
              <li class="scenic_two">讲解预定</li>
            </router-link>

            <router-link to="/handbook/reg">
              <li class="scenic_three">游客须知</li>
            </router-link>
          </ul>
        </div>
        <router-view>

        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Visit",
    mounted() {
      $(".lists li").click(function(){
        $(this).css({'color':"red","border-left":"4px solid #e23f3f"});
        $(this).parent().siblings().children().css({"color":"black","border":"1px solid #f3f8fa"})
      })
    }
  }
  // $(function () {
  //   $(".scenic_one").click(function () {
  //     $(this).css({"color": "#e23f3f", "borderLeft": "4px solid #e23f3f", "width": "211px"});
  //     $(".scenic_two").css({"color": "black", "borderLeft": "1px solid #F3F8FA", "width": "214px"});
  //     $(".scenic_three").css({"color": "black", "borderLeft": "1px solid #F3F8FA", "width": "214px"})
  //   })
  //   $(".scenic_two").click(function () {
  //     $(this).css({"color": "#e23f3f", "borderLeft": "4px solid #e23f3f", "width": "211px"});
  //     $(".scenic_one").css({"color": "black", "borderLeft": "1px solid #F3F8FA", "width": "214px"});
  //     $(".scenic_three").css({"color": "black", "borderLeft": "1px solid #F3F8FA", "width": "214px"})
  //   })
  //   $(".scenic_three").click(function () {
  //     $(this).css({"color": "#e23f3f", "borderLeft": "4px solid #e23f3f", "width": "211px"});
  //     $(".scenic_two").css({"color": "black", "borderLeft": "1px solid #F3F8FA", "width": "214px"});
  //     $(".scenic_one").css({"color": "black", "borderLeft": "1px solid #F3F8FA", "width": "214px"})
  //   })
  // })
</script>

<style scoped>
  .jizs{
    border-left:4px solid #e23f3f;
    color:#e23f3f;
  }
  li{
    box-sizing: border-box;
  }

  .Handbook {
    width: 100%;
    background: #f3f8fa;
    padding-bottom: 77px;
    box-sizing: border-box;
  }

  .banner {
    width: 100%;
    height: 340px;
  }

  .Handbook_core {
    width: 62.5%;
    height: 690px;
    margin: 0 auto;
    display: flex;
  }

  .coreleft {
    width: 214px;
    height: 150px;
    background: #fff;
    margin-right: 10px;
  }

  /*.scenic {*/
    /*color: #fff;*/
    /*background-color: #e23f3f;*/
    /*height: 72px;*/
    /*width: 214px;*/
    /*line-height: 72px;*/
    /*text-align: center;*/
  /*}*/

  /*.coreleft ul {*/
    /*list-style: none;*/
  /*}*/

  /*.coreleft li {*/
    /*height: 50px;*/
    /*width: 100%;*/
    /*line-height: 50px;*/
    /*text-align: center;*/
    /*font-size: 12px;*/
    /*background: #fff;*/
    /*border: 1px solid #F3F8FA;*/
  /*}*/

  /*.scenic_one {*/
    /*color: #e23f3f;*/
    /*width: 210px;*/
  /*}*/

</style>
