<template>
  <section>
    <div class="title">
      <div class="title-left">新品首发</div>
      <div class="title-right">
        更多
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <ul class="Reco-bottom">
      <li v-for="(item, index) in newItemList" :key="index">
        <img :src="item.listPicUrl" alt>
        <span>
        {{item.name}}
          <p>${{item.counterPrice}}</p>
        </span>
      </li>
      
    </ul>
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      newItemList:state=>state.home.newItemList
    })
  }
  
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../static/mixins.styl'
section
  padding 20px
  line-height 30px
  margin-bottom 20px
  .title
    display flex
    justify-content space-between
    padding 0px 10px
    // -ms-flex-pack center
    .title-left
      font-weight 800
  .Reco-bottom
    clearFix()
    li
      float left
      width 20%
      margin 6px
      img
        width 100%
        background #f5f5f5
      span
        font-size 11px

        p
          color #b4282d
          display inline
</style>