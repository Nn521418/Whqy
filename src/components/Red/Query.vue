<template>
  <div class="core_right core_right_02">
    <el-table
      class="tables"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="景区名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="景区开放时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="门票价格">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="订票电话">
      </el-table-column>
      <el-table-column
        prop="path"
        label="公交路线">
      </el-table-column>
      <el-table-column
        prop="time"
        label="列车时刻表">
      </el-table-column>
    </el-table>
    <el-table
      class="tables"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="景区名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="景区开放时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="门票价格">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="订票电话">
      </el-table-column>
      <el-table-column
        prop="path"
        label="公交路线">
      </el-table-column>
      <el-table-column
        prop="time"
        label="列车时刻表">
      </el-table-column>
    </el-table>
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
    name: "Query",
    data() {
      return{
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tel: '15919191191',
            path: '锦业一路',
            time: '9.00-10.00'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tel: '15919191191',
            path: '锦业一路',
            time: '9.00-10.00'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            tel: '15919191191',
            path: '锦业一路',
            time: '9.00-10.00'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            tel: '15919191191',
            path: '锦业一路',
            time: '9.00-10.00'
          }]
      }
    }
  }
</script>

<style scoped>
  .tables {
    margin-bottom: 47px;
    width:100%;
  }

  .core_right {
    min-height: 976px;
    margin-bottom: 48px;
    width:calc(100% - 224px);
    float:left;
  }

  .pages {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 47px;
  }
</style>
