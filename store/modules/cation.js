import {
  GetCationData,
  GetRecommendedData
} from '../../api/index'
import {
  RECEIVE_TABLIST, //第三页导航栏
  RECEIVE_RECOMMENDED, //推荐页数据
  RECEIVE_CATIONID
} from '../mutation-types'
const state = {
  tablist: [],
  Recommended: [],
  cationid: 0,
  flag: true
}


const mutations = {
  [RECEIVE_TABLIST](state, tablist) {
    state.tablist = tablist
  },
  [RECEIVE_RECOMMENDED](state, Recommended) {
    state.Recommended = Recommended
  },
  [RECEIVE_CATIONID](state, cationid) {
    state.cationid = cationid
  },
}
const actions = {
  async REqCationData({
    commit
  }) {
    const result = await GetCationData()
    if (result.code === '200') {
      commit(RECEIVE_TABLIST, result.data)
      console.log(state.flag);
      
      if (state.flag) {
        state.flag = false
      console.log(state.flag);

        state.cationid = result.data[0].tabId
      }
    }
  },
  async ReqRecommended({
    commit
  }) {
    const result = await GetRecommendedData()
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDED, result.data)
    }
  },
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
