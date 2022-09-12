<template>
<div>
  <h3>测试传值</h3>
  <p>{{msg}}</p>
  <p>{{user}}</p>
</div>
</template>

<script>
export default {
  name: "Son",
  props:['msg','user'],
  emits:['n1change'],  //自定义事件
  data(){
    return{
      n1:88
    }
  },
  methods:{
    addN1(){
      this.n1++
      //触发自定义事件
      this.$emit('n1change',this.n1)
    }
  },
  created() {
    this.addN1()
  }
}
</script>

<style scoped>

</style>
