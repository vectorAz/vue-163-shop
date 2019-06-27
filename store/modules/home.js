import {
  GetHomedata
} from '../../api/index'
import {
  RECEIVE_POLICYDESCLIST,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE,
  RECEIVE_FLASHSALEMODULE,
  RECEIVE_TAGLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_CATEGORYMODULE,
  RECEIVE_CATEGORYHOTSELLMODULE

} from '../mutation-types'
const state = {
  policyDescList: [], //服务策略
  kingKongModule: [], //商品导航
  sceneLightShoppingGuideModule: [], //购物导航榜单
  flashSaleModule:{}, //倒计时热卖页面
  tagList:[], //品牌推荐
  popularItemList:[], //人气推荐
  newItemList:[], //新品首发
  categoryModule:[],//底部大图+商品
  categoryHotSellModule: {}//类目热销榜
}

console.log(GetHomedata());


const mutations = {
  [RECEIVE_POLICYDESCLIST](state, policyDescList) {
    state.policyDescList = policyDescList
  },
  [RECEIVE_KINGKONGMODULE](state, kingKongModule) {
    state.kingKongModule = kingKongModule
  },
  [RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE](state, sceneLightShoppingGuideModule) {
    state.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule
  },
  [RECEIVE_FLASHSALEMODULE](state, flashSaleModule) {
    state.flashSaleModule = flashSaleModule
  },
  [RECEIVE_TAGLIST](state, tagList) {
    state.tagList = tagList
  },
  [RECEIVE_POPULARITEMLIST](state, popularItemList) {
    state.popularItemList = popularItemList
  },
  [RECEIVE_NEWITEMLIST](state, newItemList) {
    state.newItemList = newItemList
  },
  [RECEIVE_CATEGORYMODULE](state, categoryModule) {
    state.categoryModule = categoryModule
  },
  [RECEIVE_CATEGORYHOTSELLMODULE](state, categoryHotSellModule) {
    state.categoryHotSellModule = categoryHotSellModule
  },

}

const actions = {
  async ReqHomeData({commit}) {
    const result = await GetHomedata()
    if (result.code === 0) {
      commit(RECEIVE_POLICYDESCLIST,result.data.policyDescList)
      commit(RECEIVE_KINGKONGMODULE, result.data.kingKongModule)
      commit(RECEIVE_SCENELIGHTSHOPPINGGUIDEMODULE, result.data.sceneLightShoppingGuideModule)
      commit(RECEIVE_FLASHSALEMODULE, result.data.flashSaleModule)
      commit(RECEIVE_TAGLIST, result.data.tagList)
      commit(RECEIVE_POPULARITEMLIST, result.data.popularItemList)
      commit(RECEIVE_NEWITEMLIST, result.data.newItemList)
      commit(RECEIVE_CATEGORYMODULE, result.data.categoryModule)
      commit(RECEIVE_CATEGORYHOTSELLMODULE, result.data.categoryHotSellModule)

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
