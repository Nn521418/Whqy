<template>
    <div class="core_right_02">
      <div class="core_right ">
        <ul>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">赵贺民回忆暴动痕迹</a> <i>2018-09-26</i></li>
        </ul>
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
        name: "Recall"
    }
</script>

<style scoped>
  .pages{
    margin-top: 80px;
    margin-bottom: 47px;
  }
  .core_right_02{
    width:calc(100% - 224px);
    padding:20px;
    box-sizing: border-box;
  }

  .core_right{
    text-align: center;
    min-height: 927px;
    margin-bottom: 48px;
  }
li{
  text-indent: 10px;
  list-style-type: square;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px dashed #d9d9d9;
}
  li img{
    margin-right: 9px;
  }
</style>
