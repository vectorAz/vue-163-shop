<template>
  <section class="register-container">
    <div class="regis-title">
      <span>{{$route.query.isPhoneRegis ? '手机号注册' : '邮箱账号注册'}}</span>
    </div>
    <div class="phone-regis" v-show="$route.query.REisPhone">
      <div class="phone">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码" v-model="code">
        <button class="get-code">获取验证码</button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" v-model="confirmPwd">
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <button class="register">注册</button>
    </div>
    <div class="email-regis" v-show="!$route.query.REisPhone">
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" v-model="confirmPwd">
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <button class="register">注册</button>
    </div>
    <div class="toash-info">
      <span class="select" :class="{selected: isSelect}" @click="isSelect = !isSelect">
        <input type="checkbox">
      </span>
      <div class="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div class="email-register" @click="gotoEmail('/user/Registered',false)" v-show="$route.query.REisPhone">
      <span>邮箱账号注册</span>
      <i class="iconfont icon-jiantouyou"></i>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      errorMsg: "",
      phone: "",
      pwd: "",
      confirmPwd: "",
      email: "",
      isSelect: "",
      code: "",
    };
  },
  methods:{
    gotoEmail(path,REisPhone){
     this.$router.replace({path, query: {REisPhone}})
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../static/mixins.styl'
.register-container
  height 100%
  background-color #fff
  padding 0 20px
  .regis-title
    margin-top 14px
    display flex
    justify-content center
    span
      font-size 18px
      color #333
  .phone-regis, .email-regis
    padding-top 60px
    .error-message
      font-size 12px
      color #b4282d
      margin 5px 0
    .phone, .code, .pwd, .email, .confirm-pwd
      width 335px
      height 45px
      border-bottom 1px solid #ddd
      margin-top 10px
      clearFix()
      input
        float left
        margin 14px 0
        font-size 14px
        color #666
        border 1px solid rgba(0, 0, 0, 0)
        outline none
      button
        float right
        width 84px
        height 29px
        font-size 14px
        color #333
        outline none
        margin 8px 5px 0 0
        background-color #fff
        border-radius 5px
        border 1px solid #333
    .register
      width 335px
      height 50px
      font-size 13px
      color #fff
      outline none
      background-color #b4282d
      border 1px solid #b4282d
  .toash-info
    height 20px
    display flex
    align-items center
    margin-top 15px
    .select
      width 14px
      height 14px
      margin-right 5px
      border 1px solid #7f7f7f
      &.selected
        background-image url('https://urswebzj.nosdn.127.net/webzj_cdn101/sprite_61fbe151ab715649c6b7c4ec39156201.png')
        background-repeat no-repeat
        background-position -161px -43px
    input
      width 20px
      height 20px
      outline none
      visibility hidden
    .text
      a
        color #007AFF
  .email-register
    display flex
    justify-content center
    align-items baseline
    margin-top 15px
    font-size 14px
    i
      font-size 14px
</style>
