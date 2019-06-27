// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../router/index'
import Head from '../components/head/head.vue'
import store from '../store/index'
import VeeValidate, {Validator}  from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';
import '../mock/index'
Vue.component('Head',Head)
Vue.config.productionTip = false
/* eslint-disable no-new */
Validator.addLocale(zh);
const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,

})
