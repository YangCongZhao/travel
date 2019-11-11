<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(pages,index) in pages" :key="index">
          <div v-for="item in pages" :key="item.id" class="icon">
            <div class="icon-img">
              <img class="icon-imgcontent" :src="item.icon" alt="">
            </div>
            <p class="icon-desc">{{item.title}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'icons',
  data () {
    return {
      icons: [
        {
          id: '001',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票'
        }, {
          id: '002',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          title: '故宫'
        }, {
          id: '003',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '北京必游'
        }, {
          id: '004',
          icon: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          title: '香山公园'
        }, {
          id: '005',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '一日游'
        }, {
          id: '006',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          title: '古水北镇'
        }, {
          id: '007',
          icon: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          title: '欢乐谷万圣节'
        }, {
          id: '008',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          title: '赏红叶'
        },
        {
          id: '008',
          icon: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          title: '赏红叶'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~styles/varibles.less';
  .icons {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    /*background: green;*/
    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      /*background: red;*/
      .icon-img{
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom: .44rem;
        /*background: blue;*/
        box-sizing: border-box;
        padding: .1rem;
        .icon-imgcontent{
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icon-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        color: @darkTextColor;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

      }
    }
  }

</style>
