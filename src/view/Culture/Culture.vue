<template>
  <div>
    <img src="../../../static/img/ooooo.png" alt="" class="overview_banner">
    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">文化教育</p>
          <ul class="lists">
            <router-link to="/Culture/red">
              <li class="scenic_one jizs">红色教育</li>
            </router-link>
            <router-link to="/Culture/Teach">
              <li class="scenic_one">党性教育</li>
            </router-link>
            <router-link to="/Culture/padegogy">
              <li class="scenic_one">历史文化教育</li>
            </router-link>
            <router-link to="/Culture/Firstheart">
              <li class="scenic_one">不忘初心，牢记使命主题教育</li>
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
    name: "Culture",
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
  @import '../../assets/css/news.css';
  .jizs{
    border-left:4px solid #e23f3f;
    color:#e23f3f;
  }
  li{
    box-sizing: border-box;
  }
</style>
