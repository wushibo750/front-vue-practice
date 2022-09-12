<template>
  <div>
    <button @click="myTab(0)">传递参数</button>
    <h1>过滤器</h1>
    <h1>{{num|toFixed}}</h1>
    <h1>调用全局过滤器</h1>
    <h1>{{num|toFixed1(2)}}</h1>
    <h1>watch属性</h1>
    <input type="text" v-model="num"/>
<h1>这是数据展示</h1>
    <h2>请求为啥总不成功</h2>
    <h1 ref="h1text">Hello Vue</h1>
    <button @click="getInfo">获取数据</button>
  </div>
</template>

<script>
import {userList} from "../../request";
export default {
  name: "UserList",
  data(){
    return{
      userList:[],
      num:10,
      num1:21
    }
  },
  filters:{
    toFixed(val){
      return val.toFixed(3)
    }
  },
  watch:{
    num(){
      console.log("num数值发生改变")
    }
  },
  methods:{
     async getUserList(){
       const {data:res}=await this.$axios.get("/api/users")
       this.userList=res.data;
      // const{data:res}= userList()
      if(res.status!==0){
        return console.log("用户列表数据请求数据")
      }
       this.userList=res.data;
       console.log(this.userList)
    },
    async postUserList(){
     const res =await this.$axios({
            method:'post',
            url:'/api/users',
            data:{
              name:"wuyou1234",
              age:"32",
              position:"studetnt"
            },
       headers: {
         'Content-Type':'application/json'
       }
       }).then(res=>{
       console.log(res.data)
     })
      console.log(res)
    },
    //data是放在请求体里面的，params是拼接在url上面的
    async deleteUserList(){
       const res=await this.$axios({
         method:'delete',
         url:'/api/users',
         params:{
           id: 2
         }
       }).then(res=>{
         console.log(res.data)
       })
      console.log(res)
    },
    //ref可以通过this.$refs的形式得到组件元素和普通DOM元素

    getInfo(){
      console.log(this.$refs.h1text.innerText)
    },
    myTab(i){
      console.log("输出数据为==》",i)
    }
  },
  created() {
    this.getUserList();
    this.postUserList();
    this.deleteUserList();
  }
}
</script>

<style scoped>

</style>
