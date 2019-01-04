<template>
  <div>
    <div class="core_right core_right_02">
      <el-tabs class="tops" v-model="activeName" @tab-click="">
        <el-tab-pane label="不忘初心" name="first">
          <div class="core_right_03">
              <ul class="jus">
                <router-link to="/bookdatails">
                  <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                </router-link>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
                <li><a><img src="../../../static/img/jjj.png" alt="">《毛泽东选集》（第一卷）</a> <i>2018-09-26</i></li>
              </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="先进典型" name="second">
          <div class="core_right_03">
              <ul class="they">
                <li>
                  <div class="myself">
                    <img class="head" src="../../../static/img/vvv.png" alt="">
                    <h5>张剑武</h5>
                  </div>
                  <div class="message">
                      <h5><i>格言:</i>剑武苍穹萧九天</h5>
                      <p>
                        在哪都是排头兵 在 我22岁时
                        回想起当时多么想谈恋爱
                        妈妈说就让它来
                        然而在 我32岁时
                        发现我没太多的心去等待
                        在哪都是排头兵 在 我22岁时
                        回想起当时多么想谈恋爱
                        妈妈说就让它来
                        然而在 我32岁时
                        发现我没太多的心去等待
                      </p>
                  </div>
                </li>
                <li>
                  <div class="myself">
                    <img class="head" src="../../../static/img/vvv.png" alt="">
                    <h5>张剑武</h5>
                  </div>
                  <div class="message">
                    <h5><i>格言:</i>剑武苍穹萧九天</h5>
                    <p>在哪都是排头兵 在 我22岁时
                      回想起当时多么想谈恋爱
                      妈妈说就让它来
                      然而在 我32岁时
                      发现我没太多的心去等待</p>
                  </div>
                </li>
                <li>
                  <div class="myself">
                    <img class="head" src="../../../static/img/vvv.png" alt="">
                    <h5>张剑武</h5>
                  </div>
                  <div class="message">
                    <h5><i>格言:</i>剑武苍穹萧九天</h5>
                    <p>在哪都是排头兵 在 我22岁时
                      回想起当时多么想谈恋爱
                      妈妈说就让它来
                      然而在 我32岁时
                      发现我没太多的心去等待</p>
                  </div>
                </li>

              </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
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
    name: "Padegogy",
    data() {
      return {
        activeName: 'first',
      }
    }
  }
</script>

<style scoped>
  .tops{
    margin-top: 21px;
  }
  .pages {
   margin:30px auto;
  }
  .core_right {
    width:calc(100% - 224px);
    float:left;
    padding: 0;
    position: relative;
    text-align: center;
    margin-bottom: 72px;
  }
  .core_right p{
    line-height: normal;
  }
  .core_right_03{
    margin-left: 23px;
    display: block;
    padding: 0;
  }
  .jus{
    width: 876px;
    margin: 0 auto;
  }
  .jus li {
    text-indent: 10px;
    /*list-style: square;*/
    line-height: 20px;
    padding: 30px 0;
    border-bottom: 1px dashed #d9d9d9;
    font-size: 18px;
    color: #49505c;
  }
  .jus li a{
    float: left;
  }
  .jus li i{
    float: right;
  }
  .jus li img {
    margin-right: 9px;
  }
  .they{
    display: block;
    padding-right:20px;
  }
  .they li{
    display: flex;
    margin-top: 34px;
  }
  .head{
    margin: 0 24px 18px 0;
  }
  .message{
    width: 816px;
    background: #f3f7f8;
    padding: 29px 0 29px 34px;
    text-align: left;
  }
  .message i{
    color:#ff5c5c ;
  }
  .message p{
    margin-right: 34px;
    line-height: 30px;
    color: #666666;
    font-size: 12px;
  }
  .message h5{
    padding-bottom: 20px;
    font-size: 14px;
    color: #576d73;
  }
  .myself{
    text-align: left;
  }
  .myself h5{
    font-size: 16px;
    color: #484848;
  }
</style>
