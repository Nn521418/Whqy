<template>
    <div class="core_right">
      <div class="core_right_02">
        <ul class="Lists">
          <li>
            <span>17</span>
            <div class="Title">
              <h6>伟华起义数字纪念馆学术讲座</h6>
              <p>纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪念馆干部职工一致表示，要坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人...</p>
            </div>
          </li>
          <li>
            <span>17</span>
            <div class="Title">
              <h6>伟华起义数字纪念馆学术讲座</h6>
              <p>纪念馆传达学习了习近平总书记在全国宣传思想工作会议上的讲话精神。通过学习讨论，纪念馆干部职工一致表示，要坚定文化自信，夯实阵地建设渭华起义纪念馆坐落在陕西省渭南市华州区高塘塬上，这里地势挺拔，山清水秀，风景宜人...</p>
            </div>
          </li>
        </ul>
      </div>
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "InForm",
        data(){
          return{

          }
        }
    }
</script>

<style scoped>
  .pages {
    position:absolute;
    left:50%;
    bottom:30px;
    transform: translateX(-50%);
  }
  .core_right{
    background:#fff;
    width:calc(100% - 224px);
    float:left;
    padding:0 20px;
    box-sizing: border-box;
    margin-bottom:20px;
    position:relative;
  }
</style>
