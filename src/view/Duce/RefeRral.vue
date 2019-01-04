<template>
    <div>
      <img src="../../../static/img/ii.png" alt="" class="overview_banner">
      <div class="content">
        <div class="content_core">
          <div class="coreleft">
            <p class="scenic">渭华起义介绍</p>
            <ul class="lists">
              <router-link to="/letter/intro">
                <li class="scenic_one jizs">起义简介</li>
              </router-link>
              <router-link to="/letter/pass">
                <li class="scenic_two">起义经过</li>
              </router-link>
              <router-link to="/letter/pics">
                <li class="scenic_one">图片档案</li>
              </router-link>
              <router-link to="/letter/call">
                <li class="scenic_two">回忆纪念</li>
              </router-link>
              <router-link to="/letter/data">
                <li class="scenic_one">历史资料</li>
              </router-link>
              <router-link to="/letter/work">
                <li class="scenic_two">研究论著</li>
              </router-link>
              <router-link to="/letter/video">
                <li class="scenic_one">音影作品</li>
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
      name: "RefeRral",
      mounted() {
        $(".lists li").click(function(){
          $(this).css({'color':"red","border-left":"4px solid #e23f3f"});
          $(this).parent().siblings().children().css({"color":"black","border":"1px solid #f3f8fa"})
        })
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
  .content_core{
    display:flex;
  }
</style>
