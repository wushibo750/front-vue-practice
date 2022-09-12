<template>
<div class="wrapper">
  <div style="margin: 200px auto; background-color: #fff;width: 350px;height: 300px;padding: 20px;border-radius: 10px">
    <div style="margin: 20px 0;text-align: center;font-size: 20px">登录</div>
  </div>
<!--  <el-form :model="user" ref="userForm">-->
  <el-form :model="user" ref="userForm">
    <el-form-item props="username">
      <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="user.username">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-lock" v-model="user.password">
      </el-input>
    </el-form-item>
    <el-form-item style="margin: 10px 0;text-align: right">
      <el-button type="primary" size="small" autocomplete="off" @click="login">
        登录
      </el-button>
      <el-button type="warn" size="small" autocomplete="off" >
        注册
      </el-button>
    </el-form-item>

  </el-form>

</div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return{
      user:{
        username:'wushibo',
        password:"12425235"
      }
    }
  },
  methods:{
    login(){
      console.log("点击登录")
    }
  }
}
</script>

<style scoped>


</style>
