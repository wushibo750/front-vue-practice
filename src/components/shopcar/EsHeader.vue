<template>
  <div>EsHeader 组件</div>

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
      default:'#007BFF'
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

</style>