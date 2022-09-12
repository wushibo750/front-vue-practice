<template>
<div class="child">
  子组件:{{value}}
  <el-button @click="getData">点击改变父级组件数据</el-button>
</div>
</template>

<script>
export default {
  name: "Child",
  data(){
    return{

    }
  },
  props:['value'],
  methods:{
    getData(){
      this.$emit("bindMsg","我是子组件")
    }
  }
}
</script>

<style scoped>
.child{
  margin-top: 20px;
}
</style>