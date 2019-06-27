import {
  GetCategoryList
} from '../../api/index'

import {
  RECEIVE_CATEGORYL1LIST
} from '../mutation-types'
const state = {
  categoryL1List:[]
}


const mutations = {
  [RECEIVE_CATEGORYL1LIST](state,categoryL1List){
    state.categoryL1List=categoryL1List
  }
}

const actions = {
  async Reqcategory({commit}){
    const result=await GetCategoryList()
    console.log(result.data.categoryL1List);
    if(result.code===0){
      commit(RECEIVE_CATEGORYL1LIST,result.data.categoryL1List)
    }
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
