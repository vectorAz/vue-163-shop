<template>
  <header>
    <div class="head-top">
      <i class="logo">
        <img src="../../src/imges/logo.png" alt>
      </i>
      <div class="heard-title">
        <div class="inner-input">
          <i class="iconfont icon-sousuo"></i>请输入商品名 搜索xxxxx件商品
        </div>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
    </div>
    <div class="head-nav">
      <div class="No-click" v-show="!navISshow">
        <ul class="NO-click-list">
          <li><a href="">首页首页</a></li>
          <li><a href="">商品商品</a></li>
          <li><a href="">推荐推荐</a></li>
          <li><a href="">电子产品</a></li>
          <li><a href="">床上用品</a></li>
          <li><a href="">影逝二度</a></li>
          <li><a href="">星际争霸</a></li>
          <li><a href="">炉石传说</a></li>
          <li><a href="">你好骚啊</a></li>
          <li><a href="">哈哈哈哈</a></li>
          <li><a href="">开花开花</a></li>
        </ul>
        <i class="iconfont icon-jiantouxia arrow-top" @click.stop="navISshow=!navISshow"></i>
      </div>
      <div class="IS-click" v-show="navISshow">
        <span>全部频道</span>
        <ul class="on-list">
          <li class="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
        </ul>
        <i class="iconfont icon-jiantoushang arrow-bottom" @click.stop="navISshow=!navISshow"></i>
      </div>
      <div class="shop-msk" v-show="navISshow" @click="navISshow=!navISshow"></div>
    </div>
  </header>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      navISshow: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      let scroll = new BScroll(".No-click", {
        click: true,
        scrollX: true,
        bounce: {
          left: true,
          right: true
        }
      });
    });
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../static/mixins.styl'
header
  width 100%
  height 80px
  position fixed
  top 0px
  left 0px
  z-index 999
  background #FFFFFF
  .head-top
    width 100%
    height 50px
    display flex
    flex-direction colum
    justify-content center
    align-items center
    position relative
    z-index 3
    background #fff
    .logo
      flex 2
      display block
      padding 5px 10px
      img
        width 100%
        height 100%
    .heard-title
      flex 9
      padding 5px
      height 25px
      line-height 25px
      font-size 13px
      border-radius 10px
      text-align center
      background rgba(0, 0, 0, 0.1)
      .inner-input
        color #000
    .login
      margin 5px 10px
      flex 1
      padding 5px 10px
      color #b4282d
      font-size 13px
      border-radius 10px
      text-align center
      border 1px solid #b4282d
      // span
  .head-nav
    width 100%
    
    .No-click
      width 100%
      overflow hidden
      position relative
      .arrow-top
        position absolute
        right 0px
        top 5px
        font-size 25px
        width 30px
        background #FFFFFF
      .NO-click-list
        clearFix()
        display inline-block
        font-size 15px
        white-space: nowrap;
        // flex-basis auto
        li
          display inline-block
          text-align center
          line-height 25px
          padding 0 5px
          margin 5px 12px
          
    .IS-click
      padding 5px
      position relative
      background #fff
      z-index 3
      span
        font-size 16px
        padding-left 10px
      .on-list
        clearFix()
        width 100%
        padding 23px 13px
        display inline-block
        box-sizing content-box
        li
          // display inline-block
          text-align center
          float left
          width 22%
          background #fafafa
          margin 8px 3px
          height 30px
          line-height 30px
          box-sizing border-box
          &.active
            border 1px solid #b4282d
      .arrow-bottom
        position absolute
        right 0px
        top 5px
        font-size 25px
        width 30px
        background #FFFFFF
        // padding 5px 10px 5px 0px
    .shop-msk
      background rgba(0, 0, 0, 0.5)
      position fixed
      top 0px
      left 0px
      right 0px
      bottom 0px
      z-index 2      
</style>