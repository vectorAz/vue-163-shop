<template>
  <section>
    <div class="head-wrap">
      <div class="head-top">
        <div class="left">
          <i class="iconfont icon-shouye-"></i>
        </div>
        <div class="center">
          <span class="active">发现</span>
          <span>甑选家</span>
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo1"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="head-Scroll">
        <ul class="Scroll-list">
          <li  v-for="(item, index) in tablist" @click="GotoTab(item.tabId)" :key="index" :class="{active:$route.query.tabIndex===item.tabId}">{{item.tabName}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      tablist:state=>state.cation.tablist
    })
  }
  ,
  mounted(){
    this.$nextTick(()=>{
      new BScroll('.head-Scroll',{
        scrollX:true,
        click:true
      })
    })
  },
  methods:{
    GotoTab(id){
      console.log(1111);
      this.$router.replace({path:'/cation/find',query:{tabIndex:id}})
      this.$store.commit('receive_cationID',id)
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../static/mixins.styl'
section
  .head-wrap
    bottom-border-1px(#6f6f6f)
    width 100%
    position relative
    position fixed
    top 0
    left 0
    .head-top
      width 100%
      height 60px
      background #FAFAFA
      display flex
      justify-content space-between
      align-items center
      .center
        font-size 20px
        width 200px
        // line-height 60px
        position absolute
        left 50%
        text-align center
        transform translateX(-100px)
        &>span
          font-size 16px
          color #777
        .active
          color #b4282d
          font-size 19px
          font-weight 800
      .left
        width 30px
        height 30px
        line-height 30px
      .right
        height 50px
        line-height 50px
      .right, .left
        i
          display inline-block
          font-size 25px
          margin 0 10px
    .head-Scroll
      width 100%
      bottom-border-1px(#6f6f6f)
      top-border-1px(#6f6f6f)
      background #fafafa
      .Scroll-list
        clearFix()
        height 40px
        display inline-block
        white-space nowrap
        li
          display inline-block
          margin 0px 20px
          line-height 40px
          &.active
            color #b4282d
            border-bottom  2px solid #b4282d
</style>