<template>
  <section>
    <div class="head-wrap">
      <div class="head-top">
        <div class="left">
          <i class="iconfont icon-shouye-" @click="gohome"></i>
        </div>
        <div class="center">
          <span class="active">网易</span>
          <span>严选</span>
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo1"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
    </div>
    <div class="wrap-content" v-show="Login">
      <ul class="content">
        <li class="logo">
          <img src="./img/163logo.png" alt>
        </li>
        <li class="phone" @click="Goto('/user/login',true)">
          <i class="iconfont icon-10"></i>
          <span>手机号码登录</span>
        </li>
        <li class="emall" @click="Goto('/user/login',false)">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </li>
        <li class="reset" @click="GotoRe('/user/Registered',true)">
          <span>手机号快速注册</span>
          <i class="iconfont icon-youjiantou"></i>
        </li>
      </ul>
      <ul class="bottom">
        <li class="wx">
          <i class="iconfont icon-yooxi"></i>
          <span>微信</span>
        </li>
        <li class="QQ">
          <i class="iconfont icon-QQ"></i>
          <span>QQ</span>
        </li>
        <li class="wb">
          <i class="iconfont icon-552cd5bdeaada"></i>
          <span>微博</span>
        </li>
      </ul>
    </div>
    <router-view v-show="!Login" :isShow='isShow' :GotoRe='GotoRe'></router-view>
  </section>
</template>
<script>
export default {
  data() {
    return {
      Login: true
    };
  },
  methods:{
    gohome(){
      this.$router.replace('/home')
    }
    ,
    isShow(){
      this.Login=true
    },
    Goto(path,isPhone){
      this.Login=false
      this.$router.replace({path,query:{isPhone}})
    },
    GotoRe(path,REisPhone){
      this.Login=false
      this.$router.replace({path,query:{REisPhone}})
    },
    
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../static/mixins.styl'
section
  height 100%
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
  .wrap-content
    width 100%
    height 100%
    .content
      margin-top 60px
      display flex
      flex-direction column
      align-items center
      width 100%
      height 100%
      background #f2f5f4
      li
        width 80%
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        img
          width 150px
          height 60px
        &.logo
          height 200px
        &.phone, &.emall
          height 60px
          padding 10px 5px
        &.phone
          background #b4282d
          color #fff
        &.emall
          color #b4282d
          border 1px solid #b4282d
          margin 20px 0px
    .bottom
      position fixed
      bottom 0
      left 0
      height 100px
      display flex
      justify-content center
      align-items center
      width 100%
      li
        width 100px
        height 20px
        text-align center
        color #7f7f7f
        i
          font-size 20px
        &.QQ
          border-left 1px solid #7f7f7f
          border-left 1px solid #7f7f7f
</style>
