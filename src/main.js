import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from '../src/assets/js/element'
import axios from 'axios'
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';    // 配置全局公共接口
Vue.prototype.axios = axios;                                       // 配置全局axios
// console.log(process.env.VUE_APP_URL)
Vue.config.productionTip = false;
Vue.use(element);     // ui组件单独抽离
// 设置路由title 登录拦截
router.beforeEach((to, from, next) => {
  /*路由变化修改title*/
  if (to.meta.title) {
    document.title = to.meta.title;
    // 模拟存储token
    window.localStorage.setItem('token', 123456);
  } else {
    next();
  }
  next();
}),

  //   //请求拦截器
  //   axios.interceptors.request.use(config => {
  //     let token = window.localStorage.getItem('token');
  //     if (token) {
  //       // config.headers.Authorization='Bearer '+token ; 
  //       config.headers['Authorization'] = 'Bearer' + token;
  //     }
  //     loading: true
  //     console.log(token);
  //     return config;
  //   }, error => {
  //     return Promise.reject(error);
  //   })


  // // // 响应拦截器
  // axios.interceptors.response.use(
  //   response => {
  //     loading: false
  //     return response;
  //   },
  //   error => {
  //     switch (error.response.status) {
  //       case 401:
  //         console.log(401);
  //         window.localStorage.removeItem("token");
  //         router.replace({
  //           path: '/login',
  //           query: { redirect: router.currentRoute.fullPath }
  //         })
  //         break;
  //       case 403:
  //         // console.log(403)
  //         return refreshToken(error, 666);
  //       default:
  //         break;
  //     }
  //     console.log(error.response);
  //     return Promise.reject(error);
  //   }
  // );




  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
