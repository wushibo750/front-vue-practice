<template>
<div>
  Index根组件
  <hr/>
  <MyTable :data="goodslist">
<!--    表格标题-->
   <template v-slot:header>
     <th>序号</th>
     <th>商品名称</th>
     <th>价格</th>
     <th>标签</th>
     <th>操作</th>
     <th>test</th>
   </template>
    <template v-slot:body="{row,index}">
      <td>{{index+1}}</td>
      <td>{{row.goods_name}}</td>
      <td>￥{{row.goods_price}}</td>
      <td>
<!--        .trim是用来除去空格的-->
        <input type="text" class="form-control form-control-sm form-ipt" v-if="row.inputVisible" v-focus
               @blur="onInputConfirm(row)" v-model.trim="row.inputValue"
               @keyup.enter="onInputConfirm(row)"
               @keyup.esc="row.inputValue = ''"/>
        <button type="button" class="btn btn-primary btn-sm" v-else @click="row.inputVisible=true">+Tag</button>
        <span class="badge badge-warning ml-2" v-for="item in row.tags" :key="item">{{item}}</span>
      </td>
      <td>
        <button type="button" class="btn btn-danger btn-sm"  @click="onRemove(row.id)">删除</button>
      </td>
      <td>
        test
      </td>
    </template>
  </MyTable>
</div>
</template>
<script>
import MyTable from "@/components/table/MyTable";
export default {
  name: "Index",
  components:{
    MyTable
  },
  data(){
    return{
      //商品列表数据
      goodslist:[]
    }
  },
  created() {
    this.getGoodsList()
  },
  methods:{
    onInputConfirm(row){
      const  val=row.inputValue
      row.inputValue=''
      row.inputVisible=false
      console.log("val的值===>",val)
      if (!val || row.tags.indexOf(val) !== -1) return
  // 2. 将用户输入的内容，作为新标签 push 到当前行的 tags 数组中
      row.tags.push(val)
    },
    onRemove(id){
      this.goodslist=this.goodslist.filter(x=>x.id!==id)
    },
    async getGoodsList(){
      const {data:res}=await this.$axios.get('/api/goods')
      if(res.status!==0)
        return this.$message.error("获取商品列表失败")
      this.goodslist=res.data
    }
  },
  // 自定义组件
  directives: {
    focus(el) {
      el.focus()
    },
  },
}
</script>

<style scoped>
.form-ipt{
  width: 80px;
  display: inline;
}
</style>