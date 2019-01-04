<template>
  <div class="core_right core_right_01">
    <ul class="Lists2">
      <router-link to="/redatails">
        <li>
          <img src="../../../static/img/aaaaaa.png" alt="">
          <div class="Title2">
            <h6>
              渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
            </h6>
            <em>
              好评率：98%
            </em>
            <p>
              地址：唐延南路团结路中段南窑头
            </p>
            <p>
              电话：15991761670
            </p>
            <p>
              营业时间：工作日8.30-16.30;节假日需提前预约
            </p>
          </div>
        </li>
      </router-link>
      <li>
        <img src="../../../static/img/ssssss.png" alt="">
        <div class="Title2">
          <h6>
            渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
          </h6>
          <em>
            好评率：98%
          </em>
          <p>
            地址：唐延南路团结路中段南窑头
          </p>
          <p>
            电话：15991761670
          </p>
          <p>
            营业时间：工作日8.30-16.30;节假日需提前预约
          </p>
        </div>
      </li>
      <li>
        <img src="../../../static/img/aaaaaa.png" alt="">
        <div class="Title2">
          <h6>
            渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
          </h6>
          <em>
            好评率：98%
          </em>
          <p>
            地址：唐延南路团结路中段南窑头
          </p>
          <p>
            电话：15991761670
          </p>
          <p>
            营业时间：工作日8.30-16.30;节假日需提前预约
          </p>
        </div>
      </li>
      <li>
        <img src="../../../static/img/ssssss.png" alt="">
        <div class="Title2">
          <h6>
            渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
          </h6>
          <em>
            好评率：98%
          </em>
          <p>
            地址：唐延南路团结路中段南窑头
          </p>
          <p>
            电话：15991761670
          </p>
          <p>
            营业时间：工作日8.30-16.30;节假日需提前预约
          </p>
        </div>
      </li>
      <li style="border-bottom: none">
        <img src="../../../static/img/aaaaaa.png" alt="">
        <div class="Title2">
          <h6>
            渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
          </h6>
          <em>
            好评率：98%
          </em>
          <p>
            地址：唐延南路团结路中段南窑头
          </p>
          <p>
            电话：15991761670
          </p>
          <p>
            营业时间：工作日8.30-16.30;节假日需提前预约
          </p>
        </div>
      </li>
    </ul>
    <el-pagination
      class="pages"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "Path"
    }
</script>

<style scoped>
  .core_right{
    margin-bottom: 48px;
  }
  .core_right_01{
    width:calc(100% - 224px);
    background:#fff;
    float:left;
    padding-left: 26px;
    padding-right:20px;
    box-sizing: border-box;
  }
  .pages{
    text-align: center;
    margin-top: 80px;
    margin-bottom: 47px;
  }
  .core_right p{
    line-height: 17px;
  }
  .Lists2 li{
    width:100%;
    border-bottom: 1px solid #ededed;
  }
  .Title2 em{
    display: inline-block;
    padding: 7px;
    background: #fce7e7;
    border: 1px solid #e23f3f;
    margin-bottom: 5px;
    border-radius: 5px;
    color: #e23f3f;
  }
  .Title2 h6{
    margin: 0;
  }
  .Title2 p{
    margin-top: 8px;
  }
</style>
