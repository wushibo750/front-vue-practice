<template>
<div class="goods-container">
<!--  左侧图片区域-->
  <div class="left">
<!--    复选框-->
    <div class="custom-control custom-checkbox" >
<!--      通过动态绑定实现多个状态自由选择-->
      <input type="checkbox" class="custom-control-input" :id="id" :checked="checked" @change="onCheckBoxChange"/>
      <!-- 将商品图片包裹于 label 之中，点击图片可以切换“复选框”的选中状态 -->
      <label class="custom-control-label" :for="id">
<!--        动态绑定src-->
        <img :src=thumb alt="商品图片" class="thumb" />
      </label>
    </div>
  </div>

<!--  右侧信息区域-->
  <div class="right">
<!--    商品名称-->
    <div class="top">{{title}}</div>
    <div class="bottom">
<!--      商品价格-->
      <div class="price">￥{{price}}</div>
<!--      商品数量-->
      <div class="count">
        <EsCounter :num="count" :min="1" @numChange="getNumber" ></EsCounter>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import EsCounter from "@/components/shopcar/EsCounter";
export default {
  name: "EsGoods",
  components:{
    EsCounter
  },
  emits:['stateChange','countChange'],
  props:{
    // 唯一的key值
    id:{
      type:[String,Number],
      required:true
    },
    // 1. 商品的缩略图
    thumb: {
      type: String,
      required: true,
    },
    // 2. 商品的名称
    title: {
      type: String,
      required: true,
    },
    // 3. 单价
    price: {
      type: Number,
      required: true,
    },
    // 4. 数量
    count: {
      type: Number,
      required: true,
    },
    // 5. 商品的勾选状态
    checked: {
      type: Boolean,
      required: false,
    },
  },
  methods:{
    getNumber(num){
      console.log("num===》",num)
      this.$emit('countChange',{
        id:this.id,
        value:num
      })
    },
    //监听复选框选中状态
    onCheckBoxChange(e){
      console.log(e.target.checked)
      //向外发送的数据为一个对象
      this.$emit('stateChange',{
        id:this.id,
        value:e.target.checked
      })
    }
  }
}
</script>

<style scoped lang="less">
.goods-container {
  //物品之间有一条线分割
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  display: flex;
  padding: 10px;
  // 左侧图片的样式
  .left {
    margin-right: 10px;
    // 商品图片
    .thumb {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  // 右侧商品名称、单价、数量的样式
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .top {
      font-weight: bold;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.4rem;
}
</style>