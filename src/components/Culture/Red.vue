<template>
  <div>
    <div class="core_right core_right_02">
      <el-tabs class="tops" v-model="activeName" @tab-click="">
        <el-tab-pane label="红色宣传" name="first">
          <div class="core_right_03">
            <ul class="Lists2">
              <router-link to="/factory">
                <li>
                  <img src="../../../static/img/bbb.png" alt="">
                  <div class="Title2">
                    <h6>
                      渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
                    </h6>
                    <em>
                      2018-05-14
                    </em>
                    <p>
                      游客书屋、晨读角，这里的读书环境太棒了！”在表演完红色经典诵读后，文家市镇里仁学校学生刘鸿深有感触。5月9日上午，渭华秋收起义纪念馆推出“品味书香，畅游景区”书香景区建设启动活动，渭南星级景区首...
                    </p>
                  </div>
                </li>
              </router-link>
              <li>
                <img src="../../../static/img/nnn.png" alt="">
                <div class="Title2">
                  <h6>
                    渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
                  </h6>
                  <em>
                    2018-05-14
                  </em>
                  <p>
                    游客书屋、晨读角，这里的读书环境太棒了！”在表演完红色经典诵读后，文家市镇里仁学校学生刘鸿深有感触。5月9日上午，渭华秋收起义纪念馆推出“品味书香，畅游景区”书香景区建设启动活动，渭南星级景区首...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="行业快讯" name="second">
          <div class="core_right_03">
            <ul class="Lists2">
              <li>
                <img src="../../../static/img/kkk.png" alt="">
                <div class="Title2">
                  <h6>
                    渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
                  </h6>
                  <em>
                    2018-05-14
                  </em>
                  <p>
                    游客书屋、晨读角，这里的读书环境太棒了！”在表演完红色经典诵读后，文家市镇里仁学校学生刘鸿深有感触。5月9日上午，渭华秋收起义纪念馆推出“品味书香，畅游景区”书香景区建设启动活动，渭南星级景区首...
                  </p>
                </div>
              </li>
              <li>
                <img src="../../../static/img/lll.png" alt="">
                <div class="Title2">
                  <h6>
                    渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
                  </h6>
                  <em>
                    2018-05-14
                  </em>
                  <p>
                    游客书屋、晨读角，这里的读书环境太棒了！”在表演完红色经典诵读后，文家市镇里仁学校学生刘鸿深有感触。5月9日上午，渭华秋收起义纪念馆推出“品味书香，畅游景区”书香景区建设启动活动，渭南星级景区首...
                  </p>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="领导关怀" name="third">
          <div class="core_right_03">
            <ul class="Lists2">
              <li>
                <img src="../../../static/img/uuuu.png" alt="">
                <div class="Title2">
                  <h6>
                    渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
                  </h6>
                  <em>
                    2018-05-14
                  </em>
                  <p>
                    游客书屋、晨读角，这里的读书环境太棒了！”在表演完红色经典诵读后，文家市镇里仁学校学生刘鸿深有感触。5月9日上午，渭华秋收起义纪念馆推出“品味书香，畅游景区”书香景区建设启动活动，渭南星级景区首...
                  </p>
                </div>
              </li>
              <li>
                <img src="../../../static/img/iiii.png" alt="">
                <div class="Title2">
                  <h6>
                    渭华起义纪念园“游客书屋”开放 “书香景区”建设开启
                  </h6>
                  <em>
                    2018-05-14
                  </em>
                  <p>
                    游客书屋、晨读角，这里的读书环境太棒了！”在表演完红色经典诵读后，文家市镇里仁学校学生刘鸿深有感触。5月9日上午，渭华秋收起义纪念馆推出“品味书香，畅游景区”书香景区建设启动活动，渭南星级景区首...
                  </p>
                </div>
              </li>
              <li></li>
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
    name: "Red",
    data() {
      return {
        activeName: 'first',
      }
    }
  }
</script>

<style scoped>
  /*.el-tabs__nav-scroll{*/
    /*justify-content: center;*/
  /*}*/
  .tops{
    margin-top: 21px;
  }
  .pages {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 63px;
  }

  .core_right {
    padding: 0;
    width:calc(100% - 224px);
    float:left;
    position: relative;
    text-align: center;
    min-height: 961px;
    margin-bottom: 72px;
  }

  .logist {
    width: 876px;
    margin: 0 auto;
  }
  .logist li {
    text-indent: 10px;
    list-style-type: square;
    line-height: 20px;
    padding: 20px 0;
    border-bottom: 1px dashed #d9d9d9;
    font-size: 18px;
    color: #49505c;
  }
  .logist li a{
    float: left;
  }
  .logist li i{
    float: right;
  }

  .logist li img {
    margin-right: 9px;
  }

  .core_right_03{
    background:#fff;
    width: 100%;
    display: block;
    padding-left:20px;
    padding-right:20px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .Title2{
    text-align: left;
  }
  .Title2 h6{
    padding-bottom: 15px;
  }
  .Lists2{
    width:100%;
  }
  .Lists2 li{
    width:100%;
    border-bottom: 1px solid #f5f6f7;
  }
  .pages{
    margin:0 auto;
  }
</style>
