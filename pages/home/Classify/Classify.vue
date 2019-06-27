<template>
  <section>
    <div v-for="(item, index) in categoryModule" :key="index">
      <img :src="item.titlePicUrl" alt>
      <div class="scorll">
        <ul class="list" v-if="item.itemList">
          <li v-for="(shops, index) in item.itemList" :key="index">
            <img :src="shops.listPicUrl" alt="1">
            <span class="ellipsis">{{shops.name}}</span>
            <span class="price">${{shops.counterPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  mounted() {
    this.$nextTick(() => {
      this.SCrollALL();
    });
  },
  methods: {
    SCrollALL() {
      const Arr = document.querySelectorAll(".scorll");
      [].forEach.call(Arr, item => {
        new BScroll(item, {
          click: true,
          scrollX: true,
          bounce: {
            left: true,
            right: true
          }
        });
      });
    }
  },

  computed: {
    ...mapState({
      categoryModule: state => state.home.categoryModule
    })
  },
  watch: {
    categoryModule() {
      this.$nextTick(() => {
        this.SCrollALL();
      });
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
section
  padding-bottom 150px
  img
    width 100%
  .scorll
    width 100%
    overflow hidden
    .list
      display inline-block
      white-space nowrap
      li
        display inline-block
        width 100px
        margin 20px 10px 20px 0px
        font-size 13px
        img
          display block
          width 100%
          background #f4f4f4
        span
          display block
          line-height 20px
        .price
          color red
</style>