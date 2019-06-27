<template>
  <div class="wrap-Scroll" v-if="this.cationid">
    <div class="content-wrap" v-if=" this.$route.query.tabIndex===this.cationid">
      <ul class="list" v-for="(item, index) in Recommended" :key="index">
        <li
          class="style-1"
          v-for="(topics) in item.topics"
          :key="topics.topicId"
          v-show="topics.style===1"
        >
          <div class="top">
            <img :src="topics.avatar" :alt="topics.subTitle">
            <span>{{topics.nickname}}</span>
          </div>
          <div class="title">{{topics.title}}</div>
          <div class="bigimg">
            <img :src="topics.picUrl" :alt="topics.subTitle">
          </div>
          <div class="bottom">
            <i class="iconfont icon-ai-eye"></i>
            <span>{{topics.readCount}}人看过</span>
          </div>
        </li>
        <li
          class="style-2"
          v-for="(topics) in item.topics"
          :key="topics.topicId+'3'"
          v-show="topics.style===2"
        >
          <div class="left">
            <div class="logo">
              <img :src="topics.avatar" :alt="topics.subTitle">
              <span>{{topics.nickname}}</span>
            </div>
            <div class="title">{{topics.title}}</div>
            <div class="titleicon">
              <i class="iconfont icon-ai-eye"></i>
              <span>{{topics.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img :src="topics.picUrl" :alt="topics.subTitle">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  computed: {
    ...mapState({
      Recommended: state => state.cation.Recommended,
      cationid: state => state.cation.cationid
    })
  },

  watch: {
    cationid() {
      console.log('-------------------------');
      
      console.log(this.Recommended);
      
      this.$route.query.tabIndex = this.$route.query.tabIndex
        ? this.$route.query.tabIndex
        : this.cationid;
      const height = document.documentElement.clientHeight;
      console.log(height);
      let ScrollEl = document.querySelector(".wrap-Scroll");
      if (ScrollEl) {
        ScrollEl.style.height = height + "px";
        let scroll = new BScroll(".wrap-Scroll", {
          click: true
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap-Scroll
  width 100%
  overflow hidden
  margin-top 120px
  .content-wrap
    .list
      display flex
      width 100%
      flex-direction column
      .style-1
        width 100%
        padding 10px
        box-sizing border-box
        .top
          width 100%
          display flex
          align-items center
          img
            width 30px
            border-radius 50%
            margin 0px 10px
        .title
          margin 20px 0px
          font-size 20px
          font-weight 500
        .bigimg
          width 100%
          img
            width 100%
        .bottom
          color #999
          font-size 13px
          margin-top 10px
          margin-left 10px
      .style-2
        display flex
        justify-content space-between
        padding 20px
        .left
          width 100%
          display flex
          flex-direction column
          .logo
            display flex
            align-items center
          .title
            font-size 20px
            font-weight 500
            margin 10px 0px
          .titleicon
            color #999
            font-size 13px
          img
            width 30px
            height 30px
            border-radius 50%
        .right
          width 100px
          border-radius 5px
          display inline-block
          img
            margin-right 20px
            width 100px
            height 100px
            border-radius 10px
</style>