<template>
  <div class="foot-wrap">
    <ul class="list">
      <router-link to='/home' class="botton"  :class="{active:$route.path==='/home'}">
        <span>
          <i class="iconfont icon-shouye-"></i>
        </span>
        <span>首页</span>
      </router-link>
      <router-link to="/chart" class="botton " :class="{active:$route.path==='/chart'}">
        <span>
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
      </router-link>
      <router-link to="/cation" class="botton"  :class="{active:$route.path==='/cation'}">
        <span>
          <i class="iconfont icon-tupian"></i>
        </span>
        <span>识物</span>
      </router-link>
      <router-link to="/shops" class="botton"  :class="{active:$route.path==='/shops'}">
        <span>
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>购物车</span>
      </router-link>
      <router-link to="/user" class="botton"  :class="{active:$route.path==='/user'}">
        <span>
          <i class="iconfont icon-geren"></i>
        </span>
        <span>个人</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.foot-wrap
  background #FFFFFF
  width 100%
  height 50px
  position fixed
  bottom 0px
  z-index 999
  .list
    width 100%
    height 100%
    display flex
    .botton
      text-align center
      height 100%
      flex 1
      flex-direction column
      align-items center
      margin 5px 5px 3px
      &.active
        color #b4282d
      span
        display block
        
</style>