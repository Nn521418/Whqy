<template>
  <div>
    <img src="../../../static/img/jj.png" alt="" class="Marty_Benner"/>
    <div class="Marty_core">
      <div class="coreleft">
        <p class="scenic">先烈事迹</p>
        <ul class="lists">
          <router-link to="/Martyrsdeeds/hreo">
            <li class="scenic_one jizs" style=" border-left: 4px solid #e23f3f;">渭华英雄</li>
          </router-link>
          <router-link to="/Martyrsdeeds/bigaffari">
            <li class="scenic_two">重大世迹</li>
          </router-link>
        </ul>
      </div>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Martyrsdeeds",
    mounted() {
      $(".lists li").click(function(){
        $(this).css({'color':"red","border-left":"4px solid #e23f3f"});
        $(this).parent().siblings().children().css({"color":"black","border":"1px solid #f3f8fa"})
      })
      // this.$ajax({
      //   method: 'get',
      //   url: 'http://192.168.0.105:9014/sys/user/findById?id=1',
      //   headers: {
      //     'Accept': '*/*',
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // }).then(function (response) {
      //   console.log(response)
      // })
    }
  }
</script>

<style scoped>
  .jizs{
    border-left:4px solid #e23f3f;
    color:#e23f3f;
  }
  li{
    box-sizing: border-box;
  }
  .Marty_Benner {
    width: 100%;
    height: 340px;
    margin-bottom: 48px;
  }

  .Marty_core {
    width: 62.7%;
    height: 100%;
    margin: 0 auto;
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
