<template>
  <div>
    <img src="../../../static/img/zzzzzz.png" alt="" class="overview_banner">

    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">参观留言</p>
          <ul class="lists">
            <router-link to="/message/sign">
              <li class="scenic_one jizs">游客签到</li>
            </router-link>
            <router-link to="/message/board">
              <li class="scenic_one">游客留言</li>
            </router-link>
            <router-link to="/message/answering">
              <li class="scenic_one">留言回复</li>
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
    name: "Message",
    created(){

    },
    mounted() {
      $(".lists li").click(function(){
        $(this).css({'color':"red","border-left":"4px solid #e23f3f"});
        $(this).parent().siblings().children().css({"color":"black","border":"1px solid #f3f8fa"})
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
  /*@import '../../assets/css/news.css';*/
  .jizs{
    border-left:4px solid #e23f3f;
    color:#e23f3f;
  }
  .coreleft{
    height:150px;
    width:214px;
  }
  li{
    box-sizing: border-box;
  }

</style>
