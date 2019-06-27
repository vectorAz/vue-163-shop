import Vuex from 'vuex'
import Vue from 'vue'
import home from './modules/home'
import category from './modules/category'
import cation from './modules/cation'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    category,
    cation
  }
})
