<template>
    <div>
      <div class="core_right core_right_02" >
        <ul>
          <li><a><img src="../../../static/img/j.png" alt="">卫华起义对陕甘革命根据地的影响</a> <i>2018-09-26</i></li>
          <li><a><img src="../../../static/img/j.png" alt="">卫华起义对陕甘革命根据地的影响</a> <i>2018-09-26</i></li>
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
        name: "Text"
    }
</script>

<style scoped>
  .pages{
    margin:0 auto;
    margin-top: 80px;
  }
  .core_right{
    width:calc(100% + 224px);
    padding:20px;
    box-sizing: border-box;
    text-align: center;
    min-height: 938px;
    margin-bottom: 48px;
  }
  ul{
    width:100%;
  }
  li{
    width:100%;
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
