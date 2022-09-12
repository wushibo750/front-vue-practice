import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)
let store=new Vuex.Store({
    state:{
        name:"wushibo",
        num:100
    },
    //获取数据函数
    getters:{
        //一定要写上参数state
        newnum(state){
            return state.name+'元'
        }
    },
    //同步
    mutations:{
        getAdd(state,data){
            state.num++
            console.log(data)
        }
    },
    //异步
    actions:{
        //第一种方式
        // getAddActions(content,data){
        //     setTimeout(()=>{
        //         content.commit('getAdd',data)
        //     },1000)
        //     console.log(data)
        // }
        //第二种方式
        getAddActions({commit},data){
            setTimeout(()=>{
                commit('getAdd',data)
            },1000)
            console.log(data)
        }
    },
})

export default store;
