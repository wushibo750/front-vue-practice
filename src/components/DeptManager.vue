<template>
<div>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="deptno"
        label="编号"
        width="150">
    </el-table-column>
    <el-table-column
        prop="dname"
        label="部门名称"
        width="120">
    </el-table-column>
    <el-table-column
        prop="loc"
        label="地址"
        width="120">
    </el-table-column>
    <el-table-column
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="delete1(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--分页    总页数=总条数/每页显示的条数-->
  <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="page">
  </el-pagination>
</div>
</template>

<script>
export default {
  name: "DeptManager",
  data(){
    return{
      tableData:[],
      pageSize:5,
      total:0
    }
  },
  methods: {
    delete1(row){
      this.$axios.delete("http://localhost:80/dept/delete/"+row.deptno).then(resp=>{
          this.$alert('删除成功！', '消息', {
            confirmButtonText: '确定',
            callback: action => {
              window.location.reload();
          }});
      })
    },
    edit(row) {
      console.log("点击编辑接口")
      console.log(row.deptno)
      // this.$router.push({
      //   path:'/update',
      //   query:{
      //     deptno:row.deptno
      //   }
      // });
    },
    page(currentPage){
      this.$axios.get("http://localhost:80/dept/findAll/"+(currentPage-1)+"/6").then(resp=>{
        console.log(resp);
        this.tableData=resp.data;
        // this.pageSize=resp.data.size;
        // this.total=resp.data.totalElements;
      })
    }
  },
  created:function(){
    this.$axios.get("http://localhost:80/dept/getList").then(resp=>{
      console.log(resp);
      this.tableData=resp.data;
      // this.pageSize
      // this.pageSize=resp.data.size;
      // this.total=resp.data.totalElements;
    })
  }
}
</script>

<style scoped>

</style>
