<template>
    <div class="core_right core_right_01">
      <div class="ticketnum">
        <h3>门票预定</h3>
        <p><img src="../../../static/img/jjjjjj.png" alt=""/>本馆基本陈列实行免费不免票参观。发票时间 08:50--16:00。</p>
        <p><img src="../../../static/img/jjjjjj.png" alt=""/>开馆时间：09:00--16:30（16：00禁止进场，16:30清场）。</p>
        <p><img src="../../../static/img/jjjjjj.png" alt=""/>国家法定节假日不休息，每周一闭馆进行设施维修（如遇节假日，闭关日期后推一天）。</p>
        <p><img src="../../../static/img/jjjjjj.png" alt=""/>团体参观请提前三天电话预约，参观热线：<i>0735-2258128</i></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ticket"
    }
</script>

<style scoped>
  .core_right_01 {
    width:calc(100% - 224px);
    float:left;
    height: 1040px;
    background:#fff;
    padding-top: 40px;
    padding-left: 26px;
    padding-right:20px;
    margin-bottom:20px;
    box-sizing: border-box;
  }
  .core_right img{
    width: 12px;
    height: 11px;
  }
.ticketnum {
  background: #fff;
}
  .core_right_01 h3{
    width:120px;
    height:46px;
    line-height:46px;
    margin:30px auto;
    border-bottom:1px solid #dbdbdb;
    font-size:20px;
    text-align:center;
    color:#3D4246;
  }

.ticketnum p {
  font-size: 15px;
  line-height: 38px;
  padding-left: 35px;
  color: #696d75;
}
.ticketnum i{
      font-size:15px;
      color:#E23F3F;
    }
</style>
