<template>
<section>
  <Head />
  <div class="top">
    <div>30天无忧退货</div>
    <div>48小时无忧退款</div>
    <div>满88元免邮费</div>
  </div>
  <div class="bottom">
    <img src="./logo.png" alt="">
    <div class="logo">
      <div>登录</div>
      <div>登录</div>
    </div>
  </div>
</section>
</template>
<script>
export default {
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
section
  background #f4f4f4
  width 100%
  height 100%
  .top
    display flex
    justify-content space-around
    div
      color #666
      font-size 13px
      margin-top 10px
  .bottom
    img
      width 150px
      position absolute
      left 0
      top 0
      bottom  0
      right 0
      margin auto
</style>
