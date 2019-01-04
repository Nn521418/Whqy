<template>
  <div class="coreright coreright_02">
    <!--时间线-->
    <!--<div></div>-->
    <!--事件-->
    <div class="coreright_box">
      <div class="coreright_box_01">
        <img src="../../../static/img/kk.png" alt=""/>
        <span>2017年大事记</span>
        <a>︿</a>
      </div>
      <div class="coreright_box_01">
        <img src="../../../static/img/kk.png" alt=""/>
        <span>2016年大事记</span>
        <a>︿</a>
      </div>
      <!--详细事件-->
      <div class="incident">
        <span>8月23日</span>
        <p>
          8月23日渭南市印发《渭南市渭南起义90周年相关活动筹备工作领导小组关于调整领导小组成员的通知》，渭南市常委，浏阳市委书记黎春秋任组长。
        </p>
      </div>
      <div class="coreright_box_01">
        <img src="../../../static/img/kk.png" alt=""/>
        <span>2000年至2014年大事记</span>
        <a>︿</a>
      </div>
      <div class="coreright_box_01">
        <img src="../../../static/img/kk.png" alt=""/>
        <span>1994年至2000年大事记</span>
        <a>︿</a>
      </div>
      <div class="coreright_box_01">
        <img src="../../../static/img/kk.png" alt=""/>
        <span>1990年至1994年大事记</span>
        <a>︿</a>
      </div>
      <div class="coreright_box_01">
        <img src="../../../static/img/kk.png" alt=""/>
        <span>1987年至1990年大事记</span>
        <a>︿</a>
      </div>
    </div>
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
        name: "bigaffari"
    }
</script>

<style scoped>
  .pages{
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 128px;
  }
  .coreright {
    width:calc(100% - 224px);
    background: #fff;
    float: left;
    padding-top: 42px;
    padding-left: 52px;
    padding-right: 52px;
    box-sizing: border-box;
    position:relative;
  }
  .coreright_02 {
    height: 948px;
   }

  .coreright_box {
    width: 100%;
    height: 100%;
    float: left; }
  .coreright_box .coreright_box_01 {
    height: 44px;
    background: #eceeef;
    padding: 0px 15px;
    margin-bottom: 20px; }
  .coreright_box .coreright_box_01 img {
    padding-top: 12px; }
  .coreright_box .coreright_box_01 span {
    line-height: 44px;
    font-size: 14px;
    color: #5b6a7b; }
  .coreright_box .coreright_box_01 a {
    padding-top: 10px;
    float: right;
    font-weight: 600;
    color: #8c949b; }

  .incident {
    height: 105px;
    background: #f3f8fa;
    margin-left: 26px;
    margin-bottom: 23px;
    padding: 22px;
    box-sizing: border-box; }
  .incident span {
    color: #F75353;
    font-size: 14px; }
  .incident p {
    padding-top: 8px;
    line-height: 24px;
    color: #778184;
    font-size: 14px; }

</style>
