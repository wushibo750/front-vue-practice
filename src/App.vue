<template>
  <div id="app">
<EsHeader></EsHeader>
<!--    <Display></Display>-->
<!--    <mavon-editor v-model="value"/>-->
<!--    <el-button type="primary" @click="getData" >获取数据</el-button>-->
<!--    <Todolist></Todolist>-->
<!--    <Parent></Parent>-->
<!--    <Child></Child>-->
    <h1>我是表头</h1>
    <router-view></router-view>
    <h1>我是表尾</h1>
<!--    <Slot1>-->
<!--      <p>默认插槽，用户自定义内容</p>-->
<!--    </Slot1>-->
<!--    <Son></Son>-->
<!--&lt;!&ndash;    父传子&ndash;&gt;-->
<!--    <Father></Father>-->
<!--    <NumberEcharts ref="getDemo"></NumberEcharts>-->
<!--    <button @click="getList">获取$refs引用</button>-->
<!--    <IndexDemo></IndexDemo>-->

  </div>
</template>

<script>
import './assets/gloable.css'
import IndexDemo from "@/views/IndexDemo.vue";
import NumberEcharts from "@/components/NumberEcharts";
import Son from '@/components/Son'
import Father from "@/components/Father";
import Slot1 from "@/components/Slot1"
import Parent from "@/components/Parent"
import Child from "@/components/Child";
import Todolist from "@/components/Todolist";
import Display from "@/components/Layout/Display";
import EsHeader from "@/components/shopcar/EsHeader";
export default {
  name: 'App',
  data(){
    return{
      value:''
    }
  },
  components: {
    IndexDemo,
    NumberEcharts,
    Son,
    Father,
    Slot1,
    Parent,
    Child,
    Todolist,
    Display,
    EsHeader
  },
  methods:{
    getList(){
      console.log("获取成功！！！！！")
      this.$refs.getDemo.demo()
    },
    getData(){
      console.log("获取数据成功===》",this.value)
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
