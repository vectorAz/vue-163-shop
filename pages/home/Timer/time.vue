<template>
  <section>
    <div class="title">
      <div class="title-left">
        <span>限时购</span>
        <ul>
          <li class="time">{{hourString}}</li>
          <li>:</li>
          <li class="time">{{minute}}</li>
          <li>:</li>
          <li class="time">{{second}}</li>
        </ul>
      </div>
      <div class="title-right">
        更多
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item) in flashSaleModule.itemList" :key="item.itemId">
        <img :src="item.picUrl" alt="1">
        <div class="price">
          <span class="new">{{item.activityPrice}}</span>
          <span class="old">{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from "vuex";
import Vue from "vue";
import moment from "moment";
export default {
  data() {
    return {
      hour: "",
      minute: "",
      second: "",
      promiseTimer: ""
    };
  },
  watch: {
    flashSaleModule() {
      if (this.flashSaleModule.remainTime > 0) {
        this.hour = Math.floor((this.flashSaleModule.remainTime / 3600) % 24);
        this.minute = Math.floor((this.flashSaleModule.remainTime / 60) % 60);
        this.second = Math.floor(this.flashSaleModule.remainTime % 60);
        this.countDowm();
      }
    }
  },
  methods: {
    countDowm() {
      var self = this;
      clearInterval(this.promiseTimer);
      this.promiseTimer = setInterval(function() {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0;
            self.$emit("countDowmEnd", true);
            clearInterval(self.promiseTimer);
          } else {
            self.second -= 1;
          }
        } else {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.hour -= 1;
            self.minute = 59;
            self.second = 59;
          } else {
            self.second -= 1;
          }
        }
      }, 1000);
    },
    formatNum(num) {
      return num < 10 ? "0" + num : "" + num;
    }
  },
  computed: {
    hourString() {
      return this.formatNum(this.hour);
    },
    minuteString() {
      return this.formatNum(this.minute);
    },
    secondString() {
      return this.formatNum(this.second);
    },
    ...mapState({
      flashSaleModule: state => state.home.flashSaleModule
    })
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
    margin-bottom 10px
    .title-left
      font-weight 800
      display flex
      ul
        clearFix()
        font-size 14px
      li
        float left
        &.time
          background #000
          color #fff
          height 16px
          line-height 16px
          margin 8px
  .list
    display flex
    flex-wrap wrap
    justify-content center
    li
      width 31%
      margin 2px
      text-align center
      .price
        .old
          font-size 12px
          color #777
          text-decoration line-through
        .new
          color #b4282d
          font-size 18px
      img
        width 100%
        background #f5f5f5
</style>