<template>
    <div class="Home">
      <Header></Header>
      <Swiper></Swiper>
      <icons></icons>
    </div>
</template>
<script>
import Header from './components/Header'
import Swiper from '../../components/Swiper'
import icons from '../../components/icons'
export default {
  data () {
    return {

    }
  },
  components: {
    Header, Swiper, icons
  }

}
</script>
<style lang="less" scoped>

</style>
