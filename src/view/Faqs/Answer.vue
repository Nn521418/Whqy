<template>
  <div>
    <img src="../../../static/img/zzzzz.png" alt="" class="overview_banner">
    <div class="matter">
      <h6><i>01</i>渭华起义有什么历史意义？</h6>
      <el-checkbox class="bind" @change="alerts()" v-model="checked1">渭华起义是大革命失败后是中共汕尾领导的，一军事力量</el-checkbox>
      <el-checkbox class="bind" v-model="checked2">渭华起义是大革命失败后是中共汕尾领导的，一军事力量</el-checkbox>
      <el-checkbox class="bind" v-model="checked3">渭华起义是大革命失败后是中共汕尾领导的，一军事力量</el-checkbox>
      <el-checkbox class="bind" v-model="checked4">渭华起义是大革命失败后是中共汕尾领导的，一军事力量</el-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Answer",
    data(){
      return{
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false,
      }
    },
    mounted() {
      if(this.checked1===true){
        alert('答案真确')
      }
    },
    methods:{
      alerts(){
        alert('okay')
      }
    }
  }
</script>

<style scoped>
  .matter {
    width: 70%;
    margin: 0 auto;
    text-align: left;
    padding-left:20px;
    padding-bottom:50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .matter i{
    display: inline-block;
    width: 27px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    border-radius: 50%;
    background: #e23f3f;
    color: #fefefe;
    font-size: 14px;
    margin-right: 12px;
  }
  .matter h6{
    font-size: 16px;
    color: #596267;
    margin-bottom: 45px;
  }
  .bind{
    padding-left: 40px;
    margin: 16px 0;
    font-size: 14px;
    color: #637079;
    width: 400px;
  }
</style>
