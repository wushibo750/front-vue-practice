<template>
  <table class="table table-bordered table-striped">
    <!-- 表格的标题区域 -->
    <thead>
    <tr>
      <!-- 命名插槽 -->
      <slot name="header"></slot>
    </tr>
    </thead>
    <!-- 表格的主体区域 -->
    <tbody>
      <tr v-for="(item,index) in data" :key="item.id">
<!--        td预留作用域插槽-->
<!--         每行都渲染一次，tr表示每行，td表示每列，一个tr包括多个td-->
          <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "MyTable",
  data(){
    return{

    }
  },
  props:{
    data:{
      type:Array,
      required:true,
      default:[]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>