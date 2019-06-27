import home from '../pages/home/home.vue'
import shops from '../pages/shops/shops.vue'
import cation from '../pages/cation/cation.vue'
import user from '../pages/user/user.vue'
import chart from '../pages/chart/chart.vue'
import chartChildren from '../pages/chart/chart-right/ChartRouter.vue'
import Login from '../pages/user/login.vue'
import Find from '../pages/cation/cationcontent/cationcontent.vue'
import Registered from '../pages/user/registered.vue'
export default [{
    path: '/home',
    component: home
  },
  {
    path:'/shops',
    component: shops
  },
  {
    path:'/cation',
    component: cation,
    children:[
      {
        path:'/cation/find',
        component:Find
      },
      {
        path:'/',
        redirect:'/cation/find'
      }
    ]
  },
  {
    path:'/user',
    component: user,
    meta:{
      FoodISshow:true
    },
    children:[
      {
        path:'/user/login',
        component:Login,
        meta:{
          FoodISshow:true
        },
      },
      {
        path:'/user/Registered',
        component:Registered,
        meta:{
          FoodISshow:true
        },
      },
    ]
  },
  {
    path:'/chart',
    component: chart,
    children:[
      {
        path:'/chart/categoryList',
        component:chartChildren
      },
      {
        path:'',
        redirect:'/chart/categoryList'
      }
    ]
  },
  {
    path:'/',
    redirect:"/home"
  }


]
