<template>
  <div>
    <div class="index_nav">
      <div class="index_navbox">
        <input type="text" class="index_search" placeholder="输入关键词模糊搜索"/>
        <button class="index_btn1" @click="gota">平台应用</button>
        <button @click="showloginbox">登录</button>
        <div class="master" @click="closelogin"></div>
        <div class="loginbox">
          <div class="loginbox_line">
            <span>登录</span>
          </div>
          <div class="login_input">
            <input type="text" placeholder="账户"/>
            <img src="../../static/img/account.png" alt=""/>
          </div>
          <div class="login_input">
            <input type="password" placeholder="密码"/>
            <img src="../../static/img/password.png" alt=""/>
          </div>
          <div class="yanzheng">
            <input type="text" placeholder="验证码"/>
            <img class="captcha_img" :src="captcha" @click="editCaptcha" alt="图片加载失败">
          </div>
          <div class="login_input login" @click="closelogin">
            登录
          </div>
        </div>
      </div>
      <div class="index_navword">
        <ul class="hovs" onselectstart="return false;">
          <li class="litt" @click="goWhqycontent">首页</li>
          <li class="litt" @click="goOverview">
            <el-dropdown placement="bottom-start" trigger="click">
                <span class="el-dropdown-link">
                  景区概况
                </span>
              <el-dropdown-menu slot="dropdown" divided="true">
                <el-dropdown-item class="el-dropdown-item">景区简介</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">景区掠影</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item" style="border-bottom: 0">组织机构</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="litt" @click="gonew">
            <el-dropdown placement="bottom-start" trigger="click">
                <span class="el-dropdown-link">
                  景区新闻
                </span>
              <el-dropdown-menu slot="dropdown" divided="true">
                <el-dropdown-item class="el-dropdown-item">新闻中心</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item" style="border-bottom: 0">通知公告</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="litt" @click="gocollect">
            <el-dropdown placement="bottom-start" trigger="click">
                <span class="el-dropdown-link">
                  藏品欣赏
                </span>
              <el-dropdown-menu slot="dropdown" divided="true">
                <el-dropdown-item class="el-dropdown-item">精品展示</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">文物故事</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item" style="border-bottom: 0">亲切留念</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="litt" @click="goletter">
            <el-dropdown placement="bottom-start" trigger="click">
                <span class="el-dropdown-link">
                  渭华起义介绍
                </span>
              <el-dropdown-menu slot="dropdown" divided="true">
                <el-dropdown-item class="el-dropdown-item">起义简介</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">起义经过</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">图片文档</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">回忆纪念</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">历史资料</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">研究论著</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item" style="border-bottom: 0">影音作品</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="litt" @click="goMartyrsdeeds">先烈事迹</li>
          <li class="litt" @click="gomind">习老精神</li>
          <li class="litt" @click="gojiao">文化教育</li>
          <li class="litt" @click="goup">渭华讲堂</li>
          <li class="litt" @click="gowhy">知识问答</li>
          <li class="litt" @click="gored">红色旅游</li>
          <li class="litt" @click="gose">服务指南</li>
          <router-link to="/message">
            <li class="litt">留言服务</li>
          </router-link>
        </ul>
      </div>
    </div>
    <router-view style="overflow: hidden;">

    </router-view>

    <div>
      <div class="index_foot">
        <div class="index_foot_box">
          <div class="contact">
            <h4>联系我们</h4>
            <h5><img src="../../static/img/positioning.png" alt=""/>地址 ：高唐街道南高东路高塘中学旁</h5>
            <h5><img src="../../static/img/phone2.png" alt=""/>电话：<i>(0913)4914021</i></h5>
            <span>参观留言</span>
          </div>
          <div v-for="(i,c) in 8" class="index-footnav">
            <h6>景区概况</h6>
            <ul>
              <li v-for="(i,d) in 3">景区简介</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="index_foot1">
        <span>©版权所有 渭华起义数字纪念馆 陕ICP备17008641号 技术支持西安艾派信息技术有限公司</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        urls: [],
        captcha: "http://47.98.182.165/blstation-web/user/defaultKaptcha",
      }
    },
    components: {},
    methods: {
      editCaptcha() {
        this.captcha =
          "http://47.98.182.165/blstation-web/user/defaultKaptcha?r=" +
          Math.random();
      },
      aa() {

      },
      gota() {
        this.$router.push('/platform')
      },
      gonew() {
        this.$router.push('/news')
      },
      goletter() {
        this.$router.push('/letter')
      },
      goWhqycontent() {
        this.$router.push('/')
      },
      goOverview() {
        this.$router.push('/OverviewContent')
      },
      gocollect() {
        this.$router.push('/collectionContent')
      },
      goMartyrsdeeds() {
        this.$router.push('/Martyrsdeeds')
      },
      gomind() {
        this.$router.push('/Mind')
      },
      gojiao() {
        this.$router.push('/Culture')
      },
      goup() {
        this.$router.push('/Classroom')
      },
      gowhy() {
        this.$router.push('/FAQS')
      },
      gored() {
        this.$router.push('/red')
      },
      gose() {
        this.$router.push('/handbook')
      },
      showloginbox() {
        $(".master").css({"display": "block"});
        $(".loginbox").css({"display": "block"});
      },
      closelogin() {
        $(".master").css({"display": "none"});
        $(".loginbox").css({"display": "none"});
      }
    },
    created() {

    },
    mounted() {

      $('.hovs .litt').on({
        // "mousemove":function () {
        //   $(this).css({'border-bottom':'3px solid #e73b3b'})
        // },
        // "mouseleave":function () {
        //   $(this).css({'border-bottom':'none'})
        // },
        "click": function () {
          $(this).css({'border-bottom': '3px solid #e73b3b'})
          $('.hovs .litt').not(this).css({"border": "none"})
        }
      })
    }
  }


</script>

<style scoped>

  .master{
    width:100%;
    height:100%;
    background:#000;
    opacity: 0.4;
    position:fixed;
    top:0;
    left:0;
    z-index:1;
    display:none;
  }
  .loginbox{
    width:472px;
    height:469px;
    background:#fff;
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index:2;
    border-radius: 10px;
    display:none;
  }
  .loginbox_line {
    width: 155px;
    height: 2px;
    background: #e9e9e9;
    margin: 50px auto;
    position: relative;
  }
  .loginbox_line span{
    position: absolute;
    left:46px;
    top:-10px;
    width:50px;
    height:20px;
    line-height:20px;
    background:#fff;
    text-align: center;
    color:#5c6b71;
    font-size:16px;
  }
  .login_input {
    width: 335px;
    height: 44px;
    line-height: 44px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
  }
  .login_input input{
    margin-left:53px;
    height:17px;
    color:#ddd;
    padding-left:10px;
    border:0;
    border-left:1px solid #ddd;
    outline: none;
  }
  .login_input img{
    position:absolute;
    top:10px;
    left:20px;
  }
  .yanzheng {
    width: 335px;
    margin: 0 auto;
    display: flex;
  }
  .yanzheng input{
    width:223px;
    height:44px;
    line-height:44px;
    border:1px solid #dddddd;
    border-radius: 5px;
    padding-left:20px;
    box-sizing: border-box;
    margin-right:10px;
  }
  .login{
    background:#e8343a;
    color:white;
    border:none;
    text-align:center;
    margin-top:46px;
  }
  .hovs li {
    line-height: 3.5;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }

  span {
    color: #fff;
  }

  /*.index_navword ul li :hover {*/
  /*color: #e73b3b;*/
  /*}*/
  /deep/ .el-dropdrown-item {
    background: #dec8bd;
    padding: 0 !important;
    margin: 0 !important;
    border-bottom: 1px solid #f3f8fa;
  }

  .index_foot {
    width: 100%;
    height: 327px;
    background: #c50c11;
  }

  .index_foot_box {
    margin: 0 auto;
    width: 62.5%;
    padding: 35px 0;
    box-sizing: border-box;
    display: flex;
  }

  .index_foot_box .contact {
    width: 270px;
    color: #fff;
    border-right: 1px solid #ad1218;
  }

  .index_foot_box .contact h4 {
    font-size: 22px;
    padding-bottom: 32px;
  }

  .index_foot_box .contact h5 {
    padding-bottom: 20px;
    font-size: 12px;
  }

  .index_foot_box .contact h5 img {
    padding-right: 10px;
  }

  .index_foot_box .contact span {
    display: block;
    height: 32px;
    line-height: 32px;
    width: 128px;
    background: #cc2a2e;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
  }

  .index-footnav {
    color: #fff;
    width: 115px;
    text-align: center;
  }

  .index-footnav h6 {
    color: #fff;
    font-size: 13px;
    padding-bottom: 15px;
  }

  .index-footnav ul {
    list-style: none;
  }

  .index-footnav ul li {
    color: #efcccd;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
  }

  .index_foot1 {
    width: 100%;
    height: 44px;
    background: #a70e14;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    color: #cc8d8f;
  }

  /*# sourceMappingURL=foot.css.map */

</style>
