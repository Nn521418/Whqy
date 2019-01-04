<template>
  <div class="coreright coreright_02">
    <div class="answering" v-for="(i,k) in 2" :key="k">
      <h3>
        <div>
          <span>
            <img src="../../../static/img/bbbbbb.png" alt=""/>
          </span>
          <a>和风细雨</a>
        </div>
        <i>2016-06-23</i>
      </h3>
      <div class="massege">
        <p>
          7月份去过照金纪念馆,那里环境优美,管理规范，工作人员热情周到,讲解员宣讲认真,是一个不错的红色教育基地
        </p>
        <h4>
          <img class="alter" src="../../../static/img/change.png" alt=""/>
        </h4>
        <div class="revert">
          <div>
            <span class="comback">回复：<a class="content"></a></span>
            <span>
                 <img src="../../../static/img/change.png" alt=""/>
                 <a class="change">修改</a>
              </span>
          </div>
        </div>
      </div>
      <div class="reply">
        <textarea class="hahah" v-model="haha" placeholder="请输入回复内容...">
        </textarea>
        <span class="spans submit">提交</span>
        <span class="spans cancel">取消</span>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "answering",
      data(){
        return{
          haha:''
        }
      },
      mounted(){
         var _this = this;
        $(".alter").click(function(){
          $(this).parents(".massege").next().css({"display": "block"})
          $(this).css({"display": "none"})
        })
        $(".submit").click(function(){
          let aa=$(this).prev().val()
          $(this).parent().prev().find(".content").text(aa)
          $(this).parent().prev().find(".revert").css({"display":"block"})
          $(this).parent().css({"display":"none"})
        })
        $(".cancel").click(function(){
          if(_this.haha.length === 0){
             $(this).parents(".reply").prev(".massege").find("img").css({"display":"block"})
           }
            $(this).parent().css({"display":"none"})

        })

        $(".change").click(function(){
          $(this).parents(".massege").next().css({"display":"block"})
        })
      }
    }
</script>

<style scoped>
  .coreright_02 {
    float: left;
    /*height: 1598px;*/
    height: auto;
    padding-top: 40px;
    padding-left: 46px;
  }

  .answering{
  width:90%;
  background:#fff;
  padding:41px 45px;
  box-sizing: border-box;
}
 h3{
   display:flex;
   align-items: flex-end;
   justify-content: space-between;
 }
 h3 div{
   display:flex;
   align-items: center;
 }
h3 div a{
  font-size:18px;
  color:#535B62;
}
h3 span{
    display:flex;
    justify-content: center;
    align-items: center;
    width:45px;
    height:45px;
    background:#f3f8fa;
    border-radius: 50%;
    margin-right:20px;
  }
h3 i{
  font-style: normal;
  font-size:12px;
  color:#7d848a;
}
.alter{
  padding-top:10px;
}
  .massege{
    background:#F3F8FA;
    margin-top:15px;
    margin-left:70px;
    padding:20px;
    box-sizing: border-box;
  }
.massege p{
  font-size:14px;
  color:#737789;
  border-bottom:1px solid #e9eef0;
  line-height:20px;
  height:40px;
}
.revert{
  margin-top:10px;
  display:none;
}
.revert div{
  display:flex;
  justify-content: space-between;
}
.revert span{
  display:-webkit-box;
  align-items: center;
}
.change{
  color:#e23f3f;
  font-weight: 600;
  font-size: 12px;
  padding-left:10px;
}
.comback{
  color:#e23f3f;
  font-weight: 600;
  font-size: 12px;
}
.comback a{
  color:#737789;
}
.reply{
  margin-top:15px;
  margin-left:70px;
  box-sizing: border-box;
  display:none;
}
textarea{
  width:100%;
  height:100px;
  border:1px solid #e2e2e2;
  resize:none;
  padding:20px 10px;
  font-size:12px;
  margin-bottom:20px;
}
  .spans{
    display:inline-block;
    width:85px;
    height:34px;
    line-height:34px;
    border-radius:4px;
    text-align:center;
    font-size:14px;
  }
  .submit{
    color:#fff;
    background:#e23f3f;
  }
  .cancel{
    color:#55636d;
    background:#eaeff1;
  }
</style>
