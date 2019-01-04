<template>
  <div>
    <div class="core_right core_right_02">
      <div class="flexbox">
        <div class="video">
          <img src="../../../static/img/qq.png" alt="">
          <a>《渭华起义》大型文献纪录片</a>
          <a><img src="../../../static/img/uu.png" alt=""><i>mp3</i></a>
        </div>
        <div class="video">
          <img src="../../../static/img/qq.png" alt="">
          <a>《渭华起义》大型文献纪录片</a>
          <a><img src="../../../static/img/uu.png" alt=""><i>mp3</i></a>
        </div>
      </div>

      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Lip"
  }
</script>

<style scoped>
  .pages {
    position:absolute;
    left:50%;
    bottom:30px;
    transform: translateX(-50%);
  }
.flexbox{
  display: flex;
}
  .core_right {
    text-align: left;
    min-height: 927px;
    margin-bottom: 48px;
    position:relative;
  }

  .video {
    margin-right: 32px;
    width: 270px;
    height: 263px;
    border: 1px solid #f0f1f2;
    text-align: center;
  }

  .video img {
    margin: 21px 0 0;
  }

  a {
    display: block;
    text-align: left;
    line-height: .5;
    text-indent: 15px;
  }
</style>
