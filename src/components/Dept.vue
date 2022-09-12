<template>
<div>
<!--  <el-container>-->
<!--    <el-main>-->
<!--&lt;!&ndash;      子菜单内容&ndash;&gt;-->
<!--      <router-view></router-view>-->
<!--    </el-main>-->
<!--  </el-container>-->
  <router-view></router-view>
  <h1>测试一下</h1>
  <table>
    <tr>
      <td>编号</td>
      <td>部门名称</td>
      <td>地址</td>
    </tr>
    <tr v-for="item in depts">
      <td>{{item.deptno}}</td>
      <td>{{item.dname}}</td>
      <td>{{item.loc}}</td>

    </tr>
  </table>
</div>
</template>
<script>
export default {
  name: "Dept",
  data(){
    return{
      depts:[]
    }
  },
  methods:{
  },
  created() {
    this.$axios.get('http://localhost:80/dept/getList')
        .then(res=>{
          console.log("输出res===>",res)
          console.log("输出res.data===>",res.data)
          this.depts=res.data;
          console.log(this.depts)
        })
  }
}
</script>

<style scoped>

</style>
