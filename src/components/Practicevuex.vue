<template>
  <div>
    <div>练习使用Vuex</div>
<!--
   所有组件都可以使用Vuex中的值
  使用this.$store.commit触发mutations中的方法 //同步
  使用this.$store.dispatch触发actions中的方法 //异步
  mapState,mapGetters需要在computed计算属性中使用
  mapActions,mapMutions需要在methods中使用
   -->
    <h1>{{$store.state.name}}</h1>
    <h1>{{$store.state.num}}</h1>
    <h1>{{$store.getters.newnum}}</h1>

    <button @click="addnum">点击传值</button>
    <h1>mapState辅助函数</h1>
    <h1>{{num}}</h1>
    <h1>{{name}}</h1>
    <h1>{{newnum}}</h1>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: "Practicevuex",
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['num','name']),
    ...mapGetters(['newnum'])
  },
  methods:{
    ...mapMutations(['getAdd']),
    ...mapActions(['getAddActions']),
    addnum(){
      //第二个参数是用户传递的参数
      this.$store.commit('getAdd',100)
      //也可以传递一个对象
      this.$store.commit('getAdd',{name:"wushibo",country:"china"})
      console.log("this的值为===》",this)
      this.$store.dispatch('getAddActions',200)
      this.getAdd(200);
      this.getAddActions(200)
    }
  }
}
</script>

<style scoped>

</style>
