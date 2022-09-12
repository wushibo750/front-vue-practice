<template>
<div>
  <button type="button" class="btn btn-light" @click="onLogout">退出登录</button>
</div>
</template>

<script>
export default {
  name: "MyHeader",
  methods:{
    onLogout(){
      localStorage.removeItem("token")
      this.$router.push('/loginrouter')
    }
  }

}
</script>

<style scoped>

</style>