<template>
  <section class="login-container">
    <div class="main-logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="phone-login" v-show="$route.query.isPhone">
      <div class="phone">
        <input
          type="text"
          name="phone"
          maxlength="11"
          placeholder="请输入手机号"
          v-model="phone"
          v-validate="'required|phone'"
        >
      </div>
      <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码" v-model="code">
        <button class="get-code">获取验证码</button>
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <div class="get-help">
        <span>遇到问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <button class="login" @click="login">登录</button>
    </div>

    <div class="email-login" v-show="!$route.query.isPhone">
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email">
      </div>
      <div class="pwd">
        <input type="password" placeholder="密码" v-model="pwd">
      </div>
      <div class="error-message">
        <span>{{msg}}</span>
      </div>
      <div class="get-help">
        <span
          @click="$router.replace({path: '/profile/register', query: {isPhoneRegis: true}})"
        >注册账号</span>
        <span>忘记密码</span>
      </div>
      <button class="login">登录</button>
    </div>

    <div class="other-login" @click="Replace">
      <span>其他登录方式</span>
    </div>
    <div class="register" v-show="true" @click="GotoRE">
      <span>注册账号</span>
      <i class="iconfont icon-52"></i>
    </div>
    <router-view/>
  </section>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      code: "",
      errorMsg: "", //手机错误
      pwd: "",
      email: "",
      msg: "" //邮箱
    };
  },
  props: {
    isShow: Function,
    GotoRe: Function
  },
  methods: {
    Replace() {
      this.isShow();
    },
    GotoRE() {
      this.GotoRe("/user/Registered", true);
    },
    login() {
      const { phone, code, pwd, email } = this;
      if (this.$route.query.isPhone) {
        //手机登录
        if (phone.trim() === "") {
          return (this.errorMsg = "手机号不能为空");
          if (code.trim() === "") {
            return (this.errorMsg = "验证码不能为空");
          }
        }
        console.log('登录成功');
        
      } else {
        //邮箱登录
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.login-container
  height 100%
  background-color #fff
  padding 0 20px
  .main-logo
    margin-top 28px
    display flex
    justify-content center
    img
      width 100px
      height 32px
  .phone-login, .email-login
    padding-top 60px
    .phone, .code, .email, .pwd
      width 325px
      height 45px
      margin-top 10px
      border-bottom 1px solid #ddd
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
        margin 8px 10px 0 0
        background-color #fff
        border-radius 5px
        border 1px solid #333
    .error-message
      font-size 12px
      color #b4282d
      margin 10px 0
    .get-help
      padding 20px 0 20px
      display flex
      justify-content space-between
      font-size 15px
      color #333
    .login
      width 338px
      height 40px
      font-size 14px
      color #fff
      outline none
      background-color #b4282d
      border 1px solid #b4282d
  .other-login
    width 325px
    height 50px
    text-align center
    line-height 50px
    font-size 14px
    color #b4282d
    border 1px solid #b4282d
    margin-top 15px
  .register
    display flex
    justify-content center
    align-items baseline
    margin-top 15px
    font-size 13px
    i
      font-size 14px
</style>