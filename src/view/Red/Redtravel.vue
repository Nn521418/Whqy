<template>
  <div>
    <img src="../../../static/img/uuuuuu.png" alt="" class="overview_banner">
    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">红色旅游</p>
          <ul class="lists">
            <router-link to="/Red/path">
              <li class="scenic_one jizs">经典路线</li>
            </router-link>
            <router-link to="/Red/folk">
              <li class="scenic_one">风土民俗</li>
            </router-link>
            <router-link to="/Red/query">
              <li class="scenic_one">便民查询</li>
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
    name: "Redtravel",
    mounted() {
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
