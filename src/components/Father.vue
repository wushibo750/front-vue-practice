<template>
<div>
<Son :msg="message" :user="userinfo"  @n1change="getn1" ></Son>
  <h1>子组件传的值:==>{{n1FormSon}}</h1>
  /*
  子组件传值需要触发点击事件
  */
</div>
</template>

<script>
import Son from './Son'
export default {
  name: "Father",
  data(){
    return{
      message:'hello vue',
      userinfo:{name:'zs',age:20},
      n1FormSon:10
    }
  },
  methods:{
    getn1(n1){
      console.log("点击成功")
      console.log(this.n1FormSon)
      this.n1FormSon=n1;
    }
  },
  components:{
    Son
  }
}
</script>

<style scoped>

</style>
