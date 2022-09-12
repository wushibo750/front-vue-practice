<template>
  <div>
    <el-container>
      <el-header>
        <div id="top">
          <div id="logo">Alan 人事管理系统</div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu><i class="el-icon-s-home">欢迎页面</i></el-menu>
          <el-menu><i class="el-icon-s-custom">员工管理</i></el-menu>
          <el-menu><i class="el-icon-s-management">部门管理</i></el-menu>
<!--          el-submenu必须要被el-menu包括-->
          <el-menu>
            <el-submenu index="">
              <template slot="title"><i class="el-icon-setting">权限管理</i></template>
              <el-menu-item-group>
                <el-menu-item>用户管理</el-menu-item>
                <el-menu-item>角色管理</el-menu-item>
                <el-menu-item>权限管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
    <el-footer>Footer</el-footer>
    <el-row>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">修改</el-button>
      <el-button type="primary">删除</el-button>
    </el-row>
    <el-form :model="form">
      <el-form-item >
        <el-input v-model="form.number" placeholder="编号" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.gender" placeholder="性别">
          <el-option value="男" label="男"></el-option>
          <el-option value="女" label="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
        <el-button type="primary" @click="searchDemo()">查询</el-button>
      </el-form-item>

    </el-form>

  </div>

</template>

<script>
export default {
  name: "IndexDemo",
  data(){
    return{
      form:{
        number:20,
        gender:'男',

      }
    }
  },
  methods:{
    search(){
      console.log("触发函数")
      this.$alert('请选中数据','警告',{
        confirmButtonText:'确定',
        callback:action => ({
          type:'info',
          message:'action:${action}'
        })
      });
    },
    searchDemo(){
      this.$message({
        message:'加油呀',
        type:'success'
      });
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 400px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}

#top {
  clear: both;
  height: 80px;
  text-align: left;
}

#top #logo {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 15px 0 0 40px;
}


</style>
