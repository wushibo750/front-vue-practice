import Vue from 'vue'
import App from './App.vue'
//导入ElementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//导入router
import router from "@/router";
//导入文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
import axios from "axios";
Vue.prototype.$axios=axios;
//导入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts=echarts
//配置全局过滤器
Vue.filter('toFixed1',(val,data)=>{
  return val.toFixed(data)
})
//导入Vuex
import store from './store/index.js'
//导入boostrap样式
import './assets/css/bootstrap.css'
//导入全局css
import './assets/index.css'

Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:8080'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
