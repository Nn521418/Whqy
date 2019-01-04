<template>
    <div>
      <img src="../../../static/img/图层25.png" alt="" class="collection_banner">
      <div class="collection_core">
        <div class="coreleft">
          <p class="scenic">藏品欣赏</p>
          <ul class="lists">
            <router-link to="/collectionContent/products">
              <li class="scenic_one jizs" style="border-left: 4px solid #e23f3f;">精品展示</li>
            </router-link>

            <router-link to="/collectionContent/CulturalStory">
            <li class="scenic_two">文物故事</li>
            </router-link>

            <router-link to="/collectionContent/souvenir">
            <li class="scenic_three">亲切留念</li>
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
        name: "collectionContent",
        mounted() {
          $(".lists li").click(function(){
            $(this).css({'color':"red","border-left":"4px solid #e23f3f"});
            $(this).parent().siblings().children().css({"color":"black","border":"1px solid #f3f8fa"})
          })
        }
    }
    // $(function(){
    //   $(".scenic_one").click(function(){
    //     $(this).css({"color":"#e23f3f","borderLeft":"4px solid #e23f3f","width":"211px"});
    //     $(".scenic_two").css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"});
    //     $(".scenic_three").css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"})
    //   })
    //   $(".scenic_two").click(function(){
    //     $(this).css({"color":"#e23f3f","borderLeft":"4px solid #e23f3f","width":"211px"});
    //     $(".scenic_one").css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"});
    //     $(".scenic_three").css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"})
    //   })
    //   $(".scenic_three").click(function(){
    //     $(this).css({"color":"#e23f3f","borderLeft":"4px solid #e23f3f","width":"211px"});
    //     $(".scenic_two").css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"});
    //     $(".scenic_one").css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"})
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
  .collection_banner {
    width: 100%;
    height: 340px;
    margin-bottom: 48px; }

  .collection_core {
    width: 62.5%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto; }

  .coreleft {
    width: 214px;
    height: 150px;
    float: left;
    background: #fff;
    margin-right: 10px; }

  .scenic {
    color: #fff;
    background-color: #e23f3f;
    height: 72px;
    width: 214px;
    line-height: 72px;
    text-align: center; }

  .coreleft ul {
    list-style: none; }

  .coreleft li {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
    background: #fff;
    border: 1px solid #F3F8FA; }

  .scenic_one {
    color: #e23f3f;
    width: 210px; }

</style>
