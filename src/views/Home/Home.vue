<template>
    <div class="Home">
      <Header></Header>
      <Swiper></Swiper>
      <icons></icons>
      <recommend></recommend>
      <Weekend></Weekend>
    </div>
</template>
<script>
import Header from './components/Header'
import Swiper from '../../components/Swiper'
import icons from '../../components/icons'
import recommend from '../../components/recommend'
import Weekend from '../../components/Weekend'
export default {
  data () {
    return {

    }
  },
  components: {
    Header, Swiper, icons, recommend, Weekend
  }

}
</script>
<style lang="less" scoped>

</style>
