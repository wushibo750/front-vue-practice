<template>
<div>
<!--  登录名称-->
<div class="form-group form-inline">
  <label for="username">登录名称</label>
  <input type="text" class="form-group ml-2" id="username"
  placeholder="请输入登录名称" autocomplete="off" v-model="username">
</div>
<!--登录密码-->
  <div class="form-group form-inline">
    <label for="password">登录密码</label>
    <input type="password" class="form-control ml-2" id="password"
    placeholder="请输入登录密码" v-model="password">
  </div>
  <button type="button" class="btn btn-primary" @click="onLoginClick">登录</button>
</div>
</template>

<script>
export default {
  name: "Loginrouter",
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    // 登录函数
    onLoginClick(){
      if(this.username==='admin' && this.password==='123456'){
          this.$router.push("/homerouter")
        return localStorage.setItem("token","Bearer xxx")
      }
      localStorage.removeItem('token')
    }
  }
}
</script>

<style scoped>

</style>