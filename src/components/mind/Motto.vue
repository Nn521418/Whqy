<template>
    <div>
      <div class="core_right core_right_02">
        <div class="conter">
          <div class="people">
            <div class="head">
              <img src="../../../static/img/cc.png" alt=""><span>习仲勋</span>
            </div>
            <p>
              “江山就是人们，人们就是江山”
            </p>
          </div>
          <div class="people">
            <div class="head">
              <img src="../../../static/img/cc.png" alt=""><span>习仲勋</span>
            </div>
            <p>
              “江山就是人们，人们就是江山”
            </p>
          </div>
          <div class="people">
            <div class="head">
              <img src="../../../static/img/cc.png" alt=""><span>习仲勋</span>
            </div>
            <p>
              “江山就是人们，人们就是江山”
            </p>
          </div>
          <div class="people">
            <div class="head">
              <img src="../../../static/img/cc.png" alt=""><span>习仲勋</span>
            </div>
            <p>
              “江山就是人们，人们就是江山”
            </p>
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
        name: "Motto"
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
.core_right{
  position: relative;
  min-height: 938px;
  margin-bottom: 42px;
}
.conter{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width:100%;
  padding:0 20px;
  box-sizing: border-box;
}
.people{
  display: flex;
  align-items: center;
  position: relative;
  width:45%;
  height: 138px;
  border: 1px solid #eaf0f3;
  margin-top:66px;
}
.people p {
  color: #53656c;
  font-size: 14px;
}
.people span{
  margin-left: 15px;
}
  .head{
    position: absolute;
    left: 23px;
    top: -30px;
    display: flex;
    align-items: center;
  }
</style>
