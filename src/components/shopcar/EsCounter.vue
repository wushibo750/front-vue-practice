<template>
<div>
  <div class="counter-container">
    <!-- 数量 -1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onSubClick">-</button>
    <!-- 输入框 -->
    <input type="number" class="form-control form-control-sm ipt-num" v-model.number="number"/>
    <!-- 数量 +1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onAddClick">+</button>
  </div>
</div>
</template>

<script>
export default {
  name: "EsCounter",
  emits:['numChange'],
  props: {
    //数量值
    num: {
      type: Number,
      default: 0
    },
    //最小值
    min: {
      type: Number,
      default: NaN
    }
  },
  data() {
    return {
      //props中的数到data中
      number: this.num
    }
  },
  methods: {
    onSubClick() {
      if (!isNaN(this.min) && this.number - 1 < this.min)
        return
      this.number -= 1
    },
    onAddClick() {
      this.number += 1
    }
  },
  //监听器
  watch: {
    number(newVal) {
// 1. 将输入的新值转化为整数
      const parseResult = parseInt(newVal)
// 2. 如果转换的结果不是数字，或小于1，则强制 number 的值等于1
      if (isNaN(parseResult) || parseResult < 1) {
        this.number = 1
        return
      }
// 3. 如果新值为小数，则把转换的结果赋值给 number
      if (String(newVal).indexOf('.') !== -1) {
        this.number = parseResult
        return
      }
// 触发自定义事件，把最新的 number 数值传递给组件的使用者
      this.$emit('numChange', this.number)
    },

  }
}
</script>

<style scoped lang="less">
.counter-container {
  display:flex;
   .btn {
     width: 25px;
   }
   .ipt-num {
     width: 25px;
     text-align: center;
     margin: 0 4px;
   }
}
</style>