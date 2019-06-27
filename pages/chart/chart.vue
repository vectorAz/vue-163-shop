<template>
  <div class="Cart-wrap">
    <Head/>
    <div class="Chart-content">
      <div class="left-scroll">
        <ul class="left">
          <li
            :class="{active:item.id===Itemid*1}"
            v-for="(item, index) in categoryL1List"
            :key="index"
          >
            <router-link :to="{path:'/chart',query:{id:item.id}}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {mapState }from 'vuex'
export default {
  data() {
    return {
      Itemid:''
    }
  },
  computed:{
    ...mapState({
      categoryL1List:state=>state.category.categoryL1List
    }),
  
  },

  mounted() {
    this.$nextTick(() => {
      this.Scroll = new BScroll(".left-scroll", {
        click: true
      });
    });
    this.Itemid=this.$route.query.id?this.$route.query.id:'1022001'

  },

  watch:{
    $route(){
    this.Itemid=this.$route.query.id
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.Cart-wrap
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  align-self baseline
  .Chart-content
    margin-top 80px
    height 100%
    position absolute
    left 0
    top 0
    overflow hidden
    .left-scroll
      width 110px
      height 100%
      .left
        width 100%
        display flex
        flex-direction column
        padding-bottom 120px
        li
          display inline-block
          width 100px
          text-align center
          height 50px
          line-height 30px
          padding 10px 5px
          box-sizing border-box
          &.active
            border-left 3px solid red
            color red
            
</style>