<template>
  <div>
    <div class="coreright coreright_02">
      <div class="shows">
        <h3>游客留言</h3>
        <i></i>
      </div>
      <ul class="mess">
        <li>
            <span>
            <img class="head" src="../../../static/img/heads.png" alt="">
            <h3>游客9543 <i>2018-11-15</i></h3>
            </span>
          <div class="inside">
            <p class="word">7月份陪友人去过照金纪念馆，哪里环境优美，管理规范，工作人员热情周到，讲解员宣讲认真，是一个不错的红色教育基地，很值得去。</p>
            <p><i>回复：</i>希望您有时间再来参关照金。</p>
          </div>
        </li>
        <li>
            <span>
            <img class="head" src="../../../static/img/heads.png" alt="">
            <h3>游客9543 <i>2018-11-15</i></h3>
            </span>
          <div class="inside">
            <p class="word">7月份陪友人去过照金纪念馆，哪里环境优美，管理规范，工作人员热情周到，讲解员宣讲认真，是一个不错的红色教育基地，很值得去。</p>
            <p><i>回复：</i>希望您有时间再来参关照金。</p>
          </div>
        </li>
        <li>
            <span>
            <img class="head" src="../../../static/img/heads.png" alt="">
            <h3>游客9543</h3>
            </span>
          <div class="inside">
            <p class="word">7月份陪友人去过照金纪念馆，哪里环境优美，管理规范，工作人员热情周到，讲解员宣讲认真，是一个不错的红色教育基地，很值得去。</p>
            <p><i>回复：</i>希望您有时间再来参关照金。</p>
          </div>
        </li>
        <li>
            <span>
            <img class="head" src="../../../static/img/heads.png" alt="">
            <h3>游客9543</h3>
            </span>
          <div class="inside">
            <p class="word">7月份陪友人去过照金纪念馆，哪里环境优美，管理规范，工作人员热情周到，讲解员宣讲认真，是一个不错的红色教育基地，很值得去。</p>
            <p><i>回复：</i>希望您有时间再来参关照金。</p>
          </div>
        </li>
      </ul>
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
      <div class="shows">
        <h3>发表留言</h3>
        <i></i>
      </div>
      <el-row class="rows">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            姓甚名：
            <el-input
              v-model="input1"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            电子邮箱：
            <el-input
              v-model="input1"
              clearable>
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-row class="rows">
        <el-col :span="24"><div class="grid-content bg-purple-dark">
          留言内容：
          <el-input
            type="textarea"
            class="texts"
            :autosize="{ minRows: 6, maxRows: 6}"
            placeholder="请输入内容"
            v-model="textarea3">
          </el-input>
        </div></el-col>
      </el-row>
      <el-row class="rows">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            验证码：
            <el-input
              v-model="input1"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <img id="captcha_img" :src="captcha" @click="editCaptcha" alt="图片加载失败">
          </div>
        </el-col>
      </el-row>
      <el-row class="rows" style="text-align: center">
        <el-button class="danger" type="danger">发表留言</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Board",
    data() {
      return {
        input1: '',
        captcha: "http://47.98.182.165/blstation-web/user/defaultKaptcha",
      }
    },
    methods:{
      editCaptcha() {
        this.captcha =
          "http://47.98.182.165/blstation-web/user/defaultKaptcha?r=" +
          Math.random();
      },
    }
  }
</script>

<style scoped>
  #captcha_img{
    height: 40px;
  }
  .danger{
    width: 136px;
    height: 42px;
    margin: 51px 0;
  }
  .texts{
    width: 774px;
    height: 132px;
  }
  .rows {
    font-size: 14px;
    color: #71747c;
    margin-bottom: 20px;
  }

  .el-input {
    outline: none;
    width: 314px;
    margin-left: 14px;
  }

  .el-textarea{
    vertical-align: top;
  }

  .pages {
    text-align: center;
    margin-top: 54px;
    margin-bottom: 74px;
  }


  .coreright_02 {
    float: left;
    /*height: 1598px;*/
    height: auto;
    padding-top: 40px;
    padding-left: 26px;
    padding-right:26px;
    box-sizing:border-box;
  }

  .shows {
    display: flex;
    flex-direction: column;
  }

  .shows h3 {
    color: #464a53;
    font-size: 18px;
  }

  .shows i {
    margin-top: 10px;
    margin-bottom: 39px;
    width: 35px;
    height: 1px;
    background: #d6d6d6;
  }

  .head {
    width: 45px;
    height: 45px;
  }

  .mess li {
    margin-bottom: 33px;
  }

  .mess li span {
    display: flex;
    align-items: center
  }

  .mess li h3 {
    width: 100%;
    font-size: 18px;
    color: #535b62;
    margin-left: 19px;
    display: flex;
    justify-content: space-between;
  }

  .mess li h3 i{
    color: #7d848a;
    font-size: 12px;
    font-weight: 200;
    margin-right: 20px;
  }

  .inside {
    height: 155px;
    background: #f3f8fa;
    margin-top: 20px;
    position: relative;
    padding: 40px 30px;
  }

  .word {
    border-bottom: 1px solid #e9eef0;
    margin-bottom: 14px;
  }

  .inside p {
    color: #737789;
    font-size: 14px;
    line-height: 28px;
    padding-bottom: 29px;
  }

  .inside i {
    color: #e23f3f;
  }

  .inside:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 16px;
    width: 0;
    height: 0;
    border-width: 13px;
    border-style: solid;
    border-color: transparent;
    margin-bottom: -1px;
    border-bottom-width: 16px;
    border-bottom-color: currentColor;
    color: #f3f8fa;
  }
</style>
