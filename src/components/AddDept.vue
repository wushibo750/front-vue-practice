<template>
<div>
  <el-form  :model="ruleForm" :rules="rules" ref="ruleform" label-width="100px" class="demo-ruleForm">
    <el-form-item label="部门名称" prop="dname">
      <el-input v-model="ruleForm.dname"></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="loc">
      <el-input v-model="ruleForm.loc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleform')">立即创建</el-button>
      <el-button @click="resetForm('ruleform')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "AddDept",
  data(){
    return{
      ruleForm: {
        dname: '',
        loc: '',
      },
      rules: {
        dname: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        loc: [
          { required: true, message: '请输入部门地址', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },


    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("http://localhost:80/dept/save",this.ruleForm).then(resp=>{
            if(resp.data=='success'){
              this.$alert('添加成功！', '消息', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$router.push('/DeptManager');
                }
              });
            }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  }
}
</script>

<style scoped>

</style>
