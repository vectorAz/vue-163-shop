<template>
  <section>
    <div class="title">类目热销榜</div>
    <div class="top">
      <div class="top-inner" v-for="(item, index) in categoryList" :key="index" v-show="index<2">
        <div class="content-left">
          <span>{{item.categoryName}}</span>
          <i class="icon-bottom"></i>
        </div>
        <img :src="item.picUrl" alt>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) in categoryList" :key="index" v-show="index>=2">
        <span>{{item.categoryName}}</span>
        <img :src="item.picUrl" alt="index">
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      
    }
  },

  computed: {
    ...mapState({
      categoryList: state => state.home.categoryHotSellModule.categoryList
    }),
    TopList() {
      if (this.categoryList) {
        // if (this.TopList.length <= 0) {
          return this.categoryList.splice(0, 2);
        // }
      }
    },
    BottomList() {
      if (this.categoryList) {
        // if (this.BottomList.length > 0) {
          console.log(this.categoryList);
          return this.categoryList.splice(2, 10);
        // }
      }
    }
  },
  watch: {
    BottomList() {
      // console.log(this.BottomList);
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../static/mixins.styl'
section
  padding 20px
  .title
    font-size 19px
    margin 10px 0px
    font-size 16px
    font-weight 500
  .top
    display flex
    .top-inner
      height 50%
      background #ebeff6
      margin 2px
      align-items center
      display flex
      // -ms-flex-align center
      img
        width 110px
        height 130px
      span
        white-space nowrap
      .icon-bottom
        display block
        width 30px
        height 3px
        background red
        margin-left 10px
        margin-top 10px
      .content-left
        margin-left 20px
  .list
    clearFix()
    li
      float left
      width 24%
      margin 1px
      text-align center
      background #f5f5f5
      img
        width 100%
        height 100%
</style>