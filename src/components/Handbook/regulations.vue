<template>
  <div class="core_right core_right_01">
    <div class="ticketnum">
      <h3>游客须知</h3>
      <p>一、免费开放时间：每天9:00—17:00。</p>
      <p>二、观众须在领票处排队领票，领票时间为每天9:00－16:30，16:30后停止入场。一人一票，当日有效，过期作废。每天接待参观人数限额为33000人。</p>
      <p>三、幼儿园和中小学生集体参观接待时间为周一至周五，并须提前一天预约；学龄前儿童、高龄老人、行动不便者须有正常的成年人陪护入馆参观。</p>
      <p>四、醉酒者及精神性疾病患者谢绝入馆；严禁携带易燃易爆、有毒、腐蚀性和放射性等危险品、管制刀具、小动物、大件物品等进入馆内。</p>
      <p>五、展场内请自觉保持安静，注意环境卫生，文明参观，严禁各类不文明行为。</p>
      <p>六、自觉爱护文物展品、展览设施和其他公共服务设施及花草树木等，如有损坏，须照价赔偿并承担相应的法律责任。</p>
      <p>七、请勿携带大件物品进入馆内，小件物品（50cm×30cm×20cm至80cm×60cm×40cm范围内）可到游客中心免费寄存，体积过小或过大恕不予寄存，贵重物品请随身携带。</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "regulations"
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
