<template>
  <div>
    <img src="../../../static/img/aaa.png" alt="" class="overview_banner">
    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">习老精神</p>
          <ul class="lists">
            <router-link to="/Mind/life">
              <li class="scenic_one jizs">生平简介</li>
            </router-link>
            <router-link to="/Mind/feats">
              <li class="scenic_one">丰功伟绩</li>
            </router-link>
            <router-link to="/Mind/history">
              <li class="scenic_one">历史瞬间</li>
            </router-link>
            <router-link to="/Mind/text">
              <li class="scenic_one">著作文章</li>
            </router-link>
            <router-link to="/Mind/motto">
              <li class="scenic_one">格言选粹</li>
            </router-link>
            <router-link to="/Mind/words">
              <li class="scenic_one">题词手迹</li>
            </router-link>
            <router-link to="/Mind/recall">
              <li class="scenic_one">追思缅怀</li>
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
    name: "Mind",
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
  .content_core{
    display:flex;
  }
</style>
