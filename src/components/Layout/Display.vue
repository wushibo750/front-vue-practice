<template>
<div>
  <el-container>
    <Aside/>
    <el-container>
      <el-header>Header</el-header>
      <Main/>
    </el-container>
  </el-container>
</div>
</template>

<script>
//一定要注意要导入的是一个组件，而不是一个函数
import Aside from '@/components/Layout/Aside'
import Main from "@/components/Layout/Main";
export default {
  name: "Display",
  components:{
    Aside,
    Main
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>