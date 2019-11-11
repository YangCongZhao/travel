<template>
  <div >
  <swiper :options="swiperOption" class="wrapper">
    <swiper-slide  v-for="item in swiperList" :key="item.id" class="slide-item">
      <img :src="item.url" alt="">
    </swiper-slide >
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'lb',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fcc952d6b479db0e7e61922f3ee70f04.jpg_750x200_c5b67f70.jpg'
        },
        {
          id: '0002',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg'
        },
        {
          id: '0003',
          url: 'https://imgs.qunarzz.com/piao/fusion/1809/3e/52e1824f1ace7202.jpg_750x200_ac90db3f.jpg'
        },
        {
          id: '0004',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/5ebde45f144a50e6427de9e74dad50d4.jpg_750x200_179eb37f.jpg'
        },
        {
          id: '0005',
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/2b49658e97197ebb14e591fdfebc1c2d.png_750x200_be896fb6.png'
        }

      ]
    }
  },
  computed: {
  }
}
</script>
<style lang="less" scoped>
  .wrapper{
    width: 100%;
    height: 2.5rem;
    background: #e5e5e5;
    .slide-item{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
