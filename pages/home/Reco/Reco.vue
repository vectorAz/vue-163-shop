<template>
  <section>
    <div class="title">
      <div class="title-left">人气推荐</div>
      <div class="title-right">
        更多
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <div class="Reco-content">
      <div class="Reco-top">
        <div class="left">
          <img src="./img/shops.png" alt="1">
        </div>
        <div class="right" v-if="popularItemList.length>0">
          <span class="right-1">
            <p>APP特惠</p>
          </span>
          <span class="right-2 ellipsis">{{popularItemList[0].name}}</span>
          <span class="right-3 ellipsis">{{popularItemList[0].simpleDesc}}</span>
          <span class="right-4">{{'$'+popularItemList[0].retailPrice}}</span>
        </div>
      </div>
      <ul class="Reco-bottom" v-if="newpopularItemList.length>0" >
        <li  v-for="(item, index) in newpopularItemList" :key="index" >
          <img :src="item.listPicUrl" alt>
          <span>
            {{item.name}}
            <p>${{item.retailPrice}}</p>
          </span>
        </li>
       
      </ul>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      popularItemList:state=>state.home.popularItemList
    }),
    newpopularItemList(){
      return this.popularItemList.splice(1,3)
    }
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
  .Reco-content
    .Reco-top
      display flex
      justify-content space-around
      align-items center
      img
        width 160px
      .right
        margin-left 20px
        span
          display block
        .right-1
          p
            display inline-block
            color #b4282d
            font-size 11px
            border 1px solid #b4282d
            height 13px
            line-height 13px
        .right-3
          color #666
          font-size 14px
        .right-4
          color #b4282d
    .Reco-bottom
      clearFix()
      li
        float left
        width 30%
        margin 6px
        img
          width 100%
          background #f5f5f5
        span
          font-size 13px
          p
            color #b4282d
            display inline
</style>