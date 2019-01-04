<template>
  <!-- 组织机构 -->
  <div class="core_right core_right_03">
    <h3>组织结构</h3>
    <p>{{content[0].content}}</p>
    <!--<p>我馆致力于渭华起义有关历史遗存的征集、保护、研究和展示及相关社会教育、文化服务活动，-->
      <!--同时致力于推进渭华起义及其文物研究，相关博物馆工作研究，培养、形成完备的人才队伍。-->
    <!--</p>-->
    <!--<p>-->
      <!--经过30多年来的发展，我馆的专业人才逐渐成长和熟悉起来。我馆现具备专业技术职称者有39名，其中中级职称者有11名，副高级职称者11名，正高级职称者2名。-->
    <!--</p>-->
    <!--<h4>办公室</h4>-->
    <!--<p>-->
      <!--博物馆领导管理全馆的日常工作、负责党务、人事、纪检监察、办公、文秘、机要、档案和老干。-->
      <!--群团。精神文明创建、综合协调等工作、联系电话：<span>027-88877172</span>-->
    <!--</p>-->
    <!--<h4>后勤部</h4>-->
    <!--<p>-->
      <!--负责旧址维修保护、环境卫生、后勤物资管理、公用设施设备维护管理、车辆管理和文创产品的开发与管理等工作。-->
    <!--</p>-->
  </div>
</template>

<script>
    export default {
        name: "institutional",
        data(){
          return{

          }
        },
        props:['content'],
        created() {
          console.log(this.props)
        }
    }
</script>

<style scoped>
  .core_right{
    display: block;
    width:calc(100% - 224px);
    background:#fff;
    float:left;
    padding-left:50px;
    padding-right:50px;
    margin-bottom:20px;
    box-sizing: border-box;
  }
  .core_right h3{
    text-align: center;
    font-size:20px;
    color:#40454c;
    margin-top:44px;
    margin-bottom:36px;
  }
  .core_right p{
    font-size:14px;
    color:#5c6168;
    text-indent: 28px;
    line-height:30px;
  }
  .core_right_03{
    height:1000px;
  }
  .core_right_03 h4{
    display:block;
    color:#e23f3f;
    font-size:16px;
    font-weight:600;
    padding-top:20px;
  }
  .core_right_03 span{
    color:#e23f3f;
    font-style:italic;
  }
</style>
