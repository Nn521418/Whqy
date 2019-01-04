<template>
  <div style="width: 100%;">
    <img src="../../../static/img/3333.png" alt="" class="overview_banner">
    <div class="content">
      <div class="content_core">
        <div class="coreleft">
          <p class="scenic">景区概况</p>
          <ul class="lists">
            <router-link v-for="(i,idx) in words" :key="idx" :to="{path:i.updateTime}">
              <li class="scenic_one">{{i.title}}</li>
            </router-link>

            <!--<router-link to="/OverviewContent/shufty">-->
            <!--<li class="scenic_two">景区掠影</li>-->
            <!--</router-link>-->

            <!--<router-link to="/OverviewContent/institutional">-->
            <!--<li class="scenic_three">组织机构</li>-->
            <!--</router-link>-->
          </ul>

        </div>
        <router-view :content="words">

        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OverviewContent",
    data() {
      return {
        words: []
      }
    },
    mounted() {
      this.$request.post('/jingqugaikuang/search', {})//内容接口
        .then((response) => {
          // console.log(response)
          this.words = response.data
        });


      this.$request.post('/visitorModule', {
        number: localStorage.getItem()
      })//访问接口
        .then((response) => {
          // console.log(response)
        });

      $(".lists li").click(function () {
        $(this).css({'color': "red", "border-left": "4px solid #e23f3f"});
        $(this).parent().siblings().children().css({"color": "black", "border": "none"})
      })
    }
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

  body {
    background: #F3F8FA;
  }

  .content_core {
    height: 800px;
    width:62.5%;
    margin:0 auto;
  }

  .overview_banner {
    width: 100%;
    height: 340px;
    margin-bottom: 48px;
  }

  .coreleft {
    width: 214px;
    height: 150px;
    float: left;
    background: #fff;
    margin-right: 10px;
  }

  .scenic {
    color: #fff;
    background-color: #e23f3f;
    height: 72px;
    width: 214px;
    line-height: 72px;
    text-align: center;
  }

  .coreleft ul {
    list-style: none;
  }

  .coreleft li {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
    background: #fff;
    border: 1px solid #F3F8FA;
  }

  .scenic_one {
    color: #e23f3f;
    width: 210px;
  }
</style>
