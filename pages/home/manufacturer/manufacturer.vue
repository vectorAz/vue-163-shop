<template>
  <section>
    <div class="title">
        <div class="title-left">
          品牌制造商直供
        </div>
        <div class="title-right">
            更多
            <i class="iconfont icon-jiantouyou"></i>
        </div>
    </div>
    <ul class="content-bottom">
        <li v-for="(item, index) in taglist" :key="index" :style="{backgroundImage:`url(${item.picUrl})`}">
          <span class="logo">{{item.name}}</span>
          <span class="price">{{item.floorPrice+'元起'}}</span>
          <span class="new" v-if="item.newOnShelf">上新</span>
        </li>
      
    </ul>
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      taglist:state=>state.home.tagList
    })
  },
  mounted(){
    console.log('---');
    console.log(this.taglist);
    console.log('---');

  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../static/mixins.styl'
section
  padding 10px  
  line-height 30px
  .title
    display flex
    justify-content space-between
    padding 0px 10px
    .title-left
      font-weight 800
  .content-bottom
    width 100%
    clearFix()
    li
      float left
      width 48%
      height 160px 
      background-image url('./img/海外制造商.png')
      background-size: 100% 100%
      margin 2px
      .logo
        display: block
        text-align center
        font-size: 19px
        font-weight: 700
        width 100%
      .price
        font-size: 12px
        color #777
        margin-left 50px
      .new
        display inline-block
        background #cbb693
        border-radius 5px
        color #fff
        height 19px
        line-height: 20px
        width 40px
        text-align center
</style>