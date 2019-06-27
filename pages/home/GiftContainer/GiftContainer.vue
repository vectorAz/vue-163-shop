<template>
  <section>
    <div class="Gift">
      <div class="Gift-name">-新人福利-</div>
      <div class="Gift-content">
        <div class="Left-Gift">
          <span>新人专享礼包</span>
          <img src="./img/15元立减.png" alt>
        </div>
        <div class="Right-Gift">
          <div class="Right-top">
            <div class="content-titile">
              <span>福利社</span>
              <span class="content-bottom">今日特价</span>
            </div>
            <img src="./img/福利社.png" alt>
          </div>
          <div class="Right-bottom">
             <div class="content-titile">
              <span>新人拼团</span>
              <span class="content-bottom">1元起购</span>
            </div>
            <img src="./img/新人拼团.png" alt>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.Gift
  // width 100%
  padding 10px
  .Gift-name
    width 100%
    height 20px
    text-align center
    font-size 20px
    margin 5px 0px
    line-height 20px
  .Gift-content
    display flex
    .Left-Gift
      flex 5
      background #f9e9cf
      text-align center
      width 49%
      margin-right 1px
      span
        display block
        margin 20px auto
      img
        width 100px
        height 100px
    .Right-Gift
      flex 5
      img
        width 100px
        height 100px
      .Right-top,.Right-bottom
        display  flex
        background #ffecc2
        margin-bottom 1px
        justify-content space-around
        .content-titile
          display flex
          flex-direction column
        span
          margin 5px 
        .content-bottom
          color #777
          font-size 13px
          margin-top 3px

</style>