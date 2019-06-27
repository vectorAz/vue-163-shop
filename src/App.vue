<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <Foot v-show="!this.$route.meta.FoodISshow" />
  </div>
</template> 

<script>
import Foot from "../pages/foot/foot";
import { mapActions } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("ReqHomeData");
    this.$store.dispatch("Reqcategory");
  },

  
  // methods: mapActions(['ReqHomeData','Reqcategory']),
  

  
  
  components: {
    Foot
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
#app
  width 100%
  height 100%
  .content
    // margin-top 80px
    width 100%
    height 100%
</style>
