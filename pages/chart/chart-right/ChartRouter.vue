<template>
  <div class="right">
    <div class="right-Scroll" >
        <img :src="shopClass.bannerUrl" alt="商品大图" v-if="shopClass" >
        <ul class="shops-list" v-if="shopClass">
          <li v-for="(item) in shopClass.subCateList" :key="item.shopClass">
            <img :src="item.wapBannerUrl" alt="1">
            <span>{{item.name}}</span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  data() {
    return {
      shopClass: {}, //要展现的分类
      shopID: "" //类别id
    };
  },
  computed: {
    ...mapState({
      categoryL1List: state => state.category.categoryL1List
    })
  },

  mounted() {
    this.shopID = this.$route.query.id ? this.$route.query.id : "1022001";
    console.log(this.shopID);
    this.shopClass = this.categoryL1List.find(
      item => item.id === this.shopID * 1 
    );
    console.log(this.shopClass);

    this.$nextTick(() => {
      this.Scroll = new BScroll(".right", {
        click: true
      });
    });
  },
  watch: {
    $route() {
      this.shopID = this.$route.query.id;
      this.shopClass = this.categoryL1List.find(
        item => item.id === this.shopID * 1
      );
    },
    categoryL1List() {
      console.log(this.categoryL1List);
      console.log(1111);

      this.shopClass = this.categoryL1List.find(
        item => item.id === this.shopID * 1
      );
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.right
  height 100%
  margin-left 100px
  padding 80px 20px 0px
  margin-top 80px
  .right-Scroll
    // height 100%
    // overflow hidden
    padding-bottom 220px
    img
      width 100%
      margin-top 20px
    .shops-list
      display flex
      flex-wrap wrap
      li
        width 90px
      img
        width 100%
      span
        display block
        width 100%
        text-align center
</style>
