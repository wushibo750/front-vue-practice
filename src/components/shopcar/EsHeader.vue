<template>
  <div class="header-container" :style="{color:color,backgroundColor:bgcolor,fontSize:fsize+'px'}">{{title}}</div>
</template>
<script>
export default {
  name: "EsHeader",
  props:{
    title:{
      type:String,
      default:'es-header'
    },
    bgcolor:{
      type:String,
      default:'red'
    },
    color:{
      type:String,
      default:'#ffffff'
    },
    fsize:{
      type:Number,
      default:12
    }
  }
}
</script>

<style scoped>
.header-container{
  height: 45px;
  line-height: 45px;
  text-align: center;
/*固定在顶部栏*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;  /*保证始终在上面，不被覆盖*/
}

</style>