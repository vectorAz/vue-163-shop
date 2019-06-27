<template>
  <div>
    <Head/>
    <div class="Home-list-Scroll">
      <div class="content">
        <div class="home-Swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./img/1.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="./img/2.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="./img/4.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="./img/5.jpg" alt>
              </div>
              <div class="swiper-slide">
                <img src="./img/6.jpg" alt>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <ul class="grup">
          <li v-for="(item, index) in policyDescList" :key="index">
            <img :src="item.icon" alt="">
            <span>{{item.desc}}</span>
          </li>
         
        </ul>
        <HomeContainer/>
        <GiftContainer/>
        <div class="interval"></div>
        <manufacturer/>
        <div class="interval"></div>
        <Popular/>
        <div class="interval"></div>
        <Reco/>
        <div class="interval"></div>
        <Time/>
        <div class="interval"></div>
        <News/>
        <div class="interval"></div>
        <Classify/>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BScroll from "better-scroll";
import HomeContainer from "./HomeContainer/HomeContainer";
import GiftContainer from "./GiftContainer/GiftContainer";
import Manufacturer from "./manufacturer/manufacturer";
import Popular from "./Popular/Popular";
import Reco from "./Reco/Reco";
import Time from "./Timer/time";
import News from "./News/News";
import Classify from "./Classify/Classify";
import {mapState}from 'vuex'
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    this.$nextTick(() => {
     
      const height = document.documentElement.clientHeight; //父容器高度定死
      const recoFindMain = document.querySelector(".Home-list-Scroll");
      recoFindMain.style.height = height + "px";
      let scroll = new BScroll(".Home-list-Scroll", {
        click: true
      });
    });
    
  },
  computed:{
    ...mapState({
    policyDescList:state=>state.home.policyDescList
    }
    )
  },
  components: {
    HomeContainer,
    GiftContainer,
    Manufacturer,
    Popular,
    Reco,
    Time,
    News,
    Classify
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.Home-list-Scroll
  .home-Swiper
    margin-top 100px
    img
      width 100%
      height 100%
    .swiper-pagination-bullet
      width 15px
      height 3px
      display inline-block
      background #fff
      opacity 0.4
    .swiper-pagination-bullet-active
      width 15px
      height 3px
      display inline-block
      background-color #28a7e1
  .grup
    display flex
    height 40px
    padding 5px 10px
    justify-content space-around
    line-height 40px
    li
      font-size 13px
      display flex
      span
        text-align center
      img
        display inline-block
        width 20px
        height 20px
        margin-top 10px
    // & li:nth-of-type(1) i
    //   background-image url('../../src/imges/yi.png')
    // & li:nth-of-type(2) i
    //   background-image url('../../src/imges/gou.png')
    // & li:nth-of-type(3) i
    //   background-image url('../../src/imges/$.png')
  .interval
    width 100%
    height 5px
    border-top 3px solid rgba(7, 17, 27, 0.1)
    border-bottom 3px solid rgba(7, 17, 27, 0.1)
    background #f3f5f7
</style>