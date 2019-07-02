// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/douban_api'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//添加请求拦截器
Axios.interceptors.request.use(function (config) {
    if(config.method=='post'){
      config.data = qs.stringify(config.data);
    }
    return config;
},function (error) {
    //请求错误
    return Promise.reject(error);
});
//添加响应拦截器
Axios.interceptors.response.use(function (response) {
    return response;
},function (error) {
    //响应错误
    return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
