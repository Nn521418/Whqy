<template>
 <div class="core_right core_right_01">
   <div class="ticketnum">
     <h3>讲解预定</h3>
     <p>一、只限20人以上团体参观预约讲解服务。</p>
     <p>二、您可预约的参观时间是周二至周四。</p>
     <p>三、预约需提前一天，因需要统计数据，请在周一至周六，09:00-16:30期间进行网上预约操作，逾期视为无效。</p>
     <p>四、抵馆时间时间上午勿超过11点，下午勿超过4点30分，如果超时则视为取消预约。</p>
     <p>五、预约电话：<i>0310-3012739</i>,预约后，本机与你联系后方为预约成功，或您可拨打本电话确认。</p>
     <p>六、我馆所提供的接馆服务均为免费。</p>
     <p>七、每个工作日上午10点、下午三点,我馆为零散观众提供免费定时讲解服务，无需预约。</p>
   </div>
 </div>
</template>

<script>
    export default {
        name: "Interpretation"
    }
</script>

<style scoped>
  .core_right_01{
    width:calc(100% - 224px);
    background:#fff;
    float:left;
    height: 787px;
    padding-top: 40px;
    padding-left: 26px;
    padding-right:20px;
    margin-bottom:20px;
    box-sizing: border-box;
  }
  .ticketnum{
    background:#fff;
  }
 .ticketnum h3{
    width:120px;
    height:46px;
    line-height:46px;
    margin:30px auto;
    border-bottom:1px solid #dbdbdb;
    font-size:20px;
    text-align:center;
    color:#3D4246;
  }
  .ticketnum p{
    font-size:15px;
    line-height:38px;
    padding-left:20px;
    padding-right:20px;
    color:#494E53;
  }

  .ticketnum i{
    font-size:16px;
    color:#e23f3f;
    font-weight:600;
  }
</style>
