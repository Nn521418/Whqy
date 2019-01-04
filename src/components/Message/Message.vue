<template>
    <div>
      <div class="coreright coreright_02">
        <div class="shows">
          <el-button type="warning" icon="el-icon-edit" round>签到</el-button>
          <p>您是今天第{{}}位游客</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>

.coreright_02 {
  float:left;
  height: 1040px;
  padding-top: 40px;
  padding-left: 46px;
}
  .shows{
    text-align:center;
  }
  .shows p{
    margin:0 auto;
    margin-top: 48px;
  }
</style>
