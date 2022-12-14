import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Index from "@/components/table/Index";

Vue.use(VueRouter)
import Login from '@/components/Login'
import UserList from "@/components/UserList";
import Echarts from "@/components/Echarts";
import Practicevuex from "@/components/Practicevuex";
import Element1 from "@/components/Element1";
import Dept from "@/components/Dept";
import PageOne from "@/components/PageOne";
import PageTwo from "@/components/PageTwo";
import AddDept from "@/components/AddDept";
import DeptManager from "@/components/DeptManager";
import Display from "@/components/Layout/Display";
import Main from "@/components/Layout/Main";
import Demo1 from "@/components/Layout/Demo1";
import Loginrouter from "@/components/shoprouter/Loginrouter";
import Homerouter from "@/components/shoprouter/Homerouter";
import MyUsers from "@/components/shoprouter/menus/MyUsers";
import MyRights from "@/components/shoprouter/menus/MyRights";
import MyGoods from "@/components/shoprouter/menus/MyGoods";
import MySettings from "@/components/shoprouter/menus/MySettings";
import MyOrders from "@/components/shoprouter/menus/MyOrders";
import MyAside from "@/components/shoprouter/MyAside";

const router = new VueRouter({
    //一定要考虑#
    routes: [
        {
            path: "/",
            component: Element1
            // redirect:'/users'
        },
        {
            path: '/loginrouter',
            component: Loginrouter
        },
        {
            path: '/homerouter',
            component: Homerouter,
            children: [
                {
                    path: '/homerouter/myusers',
                    component: MyUsers
                },
                {
                    path: '/homerouter/myrights',
                    component: MyRights
                },
                {
                    path: '/homerouter/mygoods',
                    component: MyGoods
                },
                {
                    path: '/homerouter/myorders',
                    component: MyOrders
                },
                {
                    path: '/homerouter/mysettings',
                    component: MySettings
                }
            ]
        },
        {
            path: '/Index',
            component: Index
        },
        {
            path: '/display',
            component: Display,
            children: [
                {
                    path: '/display/demo1',
                    component: Demo1
                }
            ]
        },

        {
            path: '/adddept',
            component: AddDept
        },
        {
            path: '/main',
            component: Main,

        },
        {
            path: "/dept",
            component: Dept,
            children: [
                {
                    path: '/dept/PageOne',
                    name: '页面一',
                    component: PageOne
                },
                {
                    path: '/dept/PageTwo',
                    name: '页面二',
                    component: PageTwo
                },
                {
                    path: '/dept/addDept',
                    component: AddDept
                },
                {
                    path: '/dept/deptManager',
                    component: DeptManager
                }
            ]
        },
        {
            path: "/practicevuex",
            component: Practicevuex
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: '/users',
            component: UserList
        },
        {
            path: '/echarts',
            component: Echarts
        }
    ]
})

router.beforeEach((to, from, next) => {
        if (to.path === '/loginrouter')
            return next();
        const token = localStorage.getItem('token')
        if (!token) {
            return next('/loginrouter')
        }
        next()
    }
)

export default router;