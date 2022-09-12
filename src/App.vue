<template>
  <div id="app">
    <router-view></router-view>
<!--&lt;!&ndash;    header组件&ndash;&gt;-->
<!--    <EsHeader title="购物车案例"></EsHeader>-->
<!--&lt;!&ndash;    goods组件&ndash;&gt;-->
<!--    <EsGoods v-for="item in goodslist"-->
<!--             :key="item.id"-->
<!--             :id="item.id"-->
<!--             :thumb="item.goods_img"-->
<!--             :title="item.goods_name"-->
<!--             :price="item.goods_price"-->
<!--             :count="item.goods_count"-->
<!--             :checked="item.goods_state"-->
<!--             @stateChange="onGoodsStateChange"-->
<!--             @countChange="onGoodsCountChange">-->
<!--    </EsGoods>-->
<!--&lt;!&ndash;    footer组件&ndash;&gt;-->
<!--    <EsFooter :total="total" :amount="amount" @fullChange="onFullStateChange"></EsFooter>-->


<!--    <Display></Display>-->
<!--    <mavon-editor v-model="value"/>-->
<!--    <el-button type="primary" @click="getData" >获取数据</el-button>-->
<!--    <Todolist></Todolist>-->
<!--    <Parent></Parent>-->
<!--    <Child></Child>-->
<!--    <h1>我是表头</h1>-->
<!--    <router-view></router-view>-->
<!--    <h1>我是表尾</h1>-->
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
import EsFooter from "@/components/shopcar/EsFooter";
import EsGoods from "@/components/shopcar/EsGoods";
export default {
  name: 'App',
  data(){
    return{
      value:'',
      //商品列表的数据
      goodslist:[]
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
    EsHeader,
    EsFooter,
    EsGoods,
  },
  created() {
    this.getGoodsList()
  },
  computed:{
    //已勾选商品的总价
    amount(){
      let a=0
      this.goodslist.filter(x=>x.goods_state).forEach(x=>{
        a+=x.goods_price * x.goods_count
      })
      return a; //返回购买的结果
    },
    // 已勾选商品的总数量
    total() {
      let t = 0
      this.goodslist
          .filter(x => x.goods_state)
          .forEach(x => {
            t += x.goods_count
          })
      return t
    }
  },
  methods:{
    onGoodsCountChange(e){
      const findResult=this.goodslist.find(x=>x.id===e.id)
      if(findResult){
        findResult.goods_count=e.value
      }
    },
    //监听商品选中状态改变
    onGoodsStateChange(e){
      console.log("传输id数据为===》",e.id)
      console.log("e.value==>",e.value)
      const findResult=this.goodslist.find(x=> x.id===e.id)
      if(findResult){
        findResult.goods_state=e.value;
      }
    },
    //请求商品列表数据
    async getGoodsList(){
      const {data:res}=await this.$axios.get('/api/cart')
      if(res.status!==200)
        return this.$message.error("请求商品列表数据失败")
      this.goodslist=res.list
      console.log("获取到的数据===>",res.list)
      for(let data of res.list){
         console.log("数据为==>",data.goods_state)
      }
    },
    //监听全选按钮状态变化
    onFullStateChange(isFull){
      console.log("App.vue中的值===》",isFull)
      this.goodslist.forEach(x=>x.goods_state=isFull)
    },
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
.custom-checkbox .custom-control-label::before {
  border-radius: 1.25rem;
}
</style>
