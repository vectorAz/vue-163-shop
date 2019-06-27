<template>
<section>
    <ul class="Container-nav">
      <li v-for="(item, index) in kingKongList" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.text}}</span>
      </li>
    </ul>

</section>
</template>
<script>
import {mapState}from 'vuex'
export default {
  computed:{
    ...mapState({
      kingKongList:state=>state.home.kingKongModule.kingKongList
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../static/mixins.styl'
.Container-nav
  clearFix()
  width 100%
  height 180px
  flex-wrap wrap
  // padding 5px 10px
  background #f4f4f4
  padding-bottom 10px
  li
    float left
    width 20%;
    // margin 11px 9px 20px
    img
      width 60px
      height 60px
    span 
      width 100%
      height 60px
      text-align center      
      white-space nowrap
      padding-left 2px

</style>