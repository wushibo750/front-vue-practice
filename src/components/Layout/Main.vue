<template>
<div>
  <router-view></router-view>
  <router-view></router-view>
  <el-main>Main组件界面</el-main>
</div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>