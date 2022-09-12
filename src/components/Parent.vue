<template>
<div>
  父组件：
  <el-input v-model="val" style="width: 300px"></el-input>
  <child :value="val" @bindMsg="msgFun"></child>
  <el-button @click="childRefClick">父组件ref点击</el-button>
  <child :value="val" @bindMsg="msgFun" :data.sync="data" ref="child"></child>
</div>
</template>
<script>
import child from "@/components/Child";
export default {
  name: "Parent",
  data(){
    return{
      val:"我是父组件"
    }
  },
  components:{
    child
  },
  methods:{
    msgFun(childVal){
      console.log(childVal,'childVal')
      this.val=childVal
    },
    childRefClick(){
      const child=this.$refs.child
      console.log(child.name)
    }
  }
}
</script>

<style scoped>

</style>