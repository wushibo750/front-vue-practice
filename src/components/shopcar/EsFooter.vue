<template>
<div class="footer-container">
<!--  全选区域-->
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="fullCheck" :checked="isfull" @change="onCheckBoxChange">
    <label class="custom-control-label" for="fullCheck">全选</label>
  </div>
<!--  合计区域-->
  <div>
    <span>合计：</span>
    <span class="amount">￥{{amount.toFixed(2)}}</span>
  </div>
<!--  结算按钮-->
  <button type="button" class="btn btn-primary" :disabled="total===0">结算{{total}}</button>
</div>
</template>

<script>
export default {
  name: "EsFooter",
  //声明自定义事件
  emits:['fullChange'],
  props:{
    amount:{
      type:Number,
      default:0
    },
    // 已勾选商品的总数量
    total:{
      type:Number,
      default:0
    },
    //全选按钮的选中状态
    isfull:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    //监听复选框状态
    onCheckBoxChange(e){
      // console.log(e.target.checked)
      //触发自定义事件
      this.$emit('fullChange',e.target.checked)
    }
  }
}
</script>

<style scoped>
.footer-container {
  height: 50px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.amount{
  color: red;
  font-weight: bold;
}
/*美化按钮*/
.btn-primary{
  height: 38px;
  border-radius: 19px;
  min-width: 90px;
}
</style>