<template>
<div>
  <el-container>

    <el-aside width="200px" style="background-color: rgb(238,241,246)">
      <el-menu :default-openeds="['1','3']" style="min-height: 100%">

        <el-submenu index="1"><i class="el-icon-message"></i>导航一</el-submenu>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item-group index="1-4-1">选项4-1</el-menu-item-group>
        </el-submenu>

        <el-submenu index="2"><i class="el-icon-menu"></i>导航二</el-submenu>
          <template slot="tilte"><i class="el-icon-message"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right;font-size: 12px;border-bottom: 1px solid #ccc;line-height: 60px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
          <span>王小虎</span>
        </el-dropdown>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" ></el-table-column>
        </el-table>
      </el-main>
    </el-container>

  </el-container>
</div>
</template>

<script>
export default {
  name: "Home",
  data(){
    const item={
      date:'2022-8-19',
      name:'王小虎',
      address:'上海市金沙路'
    }
    return{
      tableData: Array(20).fill(item),
      msg:'hello 情哥哥哥'
    }
  }
}
</script>

<style scoped>

</style>
