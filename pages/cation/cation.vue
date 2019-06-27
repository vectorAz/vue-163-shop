<template>
  <section>
  <Cationhead />
  <router-view></router-view>
  </section>
</template>
<script>
import Cationhead from './cationhead/cationhead'
export default {
  components:{
    Cationhead,
  },

  mounted(){
    this.$store.dispatch('REqCationData')
    this.$store.dispatch('ReqRecommended')
  },
 
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../static/mixins.styl'
</style>