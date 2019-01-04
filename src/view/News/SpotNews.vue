<template>
  <div>
    <img src="../../../static/img/yyyyyyyy.png" alt="" class="overview_banner">
    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">景区新闻</p>
          <ul class="lists">
            <router-link to="/news/News" v-for="(i,idx) in news" :key="idx">
              <li class="scenic_one jizs">{{i.title}}</li>
            </router-link>
            <router-link to="/news/InForm">
              <li class="scenic_two">通知公告</li>
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
    name: "SpotNews",
    data() {
      return {
        news: []
      }
    },
    components: {},
    mounted() {
      this.$request.post('/jingquxinwen/search', {})
        .then((response) => {
          this.news = response.data
        })
      $(".lists li").click(function () {
        $(this).css({'color': "red", "border-left": "4px solid #e23f3f"});
        $(this).parent().siblings().children().css({"color": "black", "border": "1px solid #f3f8fa"})
      })
    },
  }
</script>

<style scoped>
  .jizs {
    border-left: 4px solid #e23f3f;
    color: #e23f3f;
  }
  li {
    box-sizing: border-box;
  }
</style>
