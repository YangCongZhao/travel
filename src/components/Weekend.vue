<template>
  <div class="Weekend">
    <div class="Weekend-title">周末去哪儿玩</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in WeekendList" :key="index">

        <div class="item-img-wrapper">
          <img class="item-img" :src="item.img" alt="">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>

      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'homeWeekend',
  data () {
    return {
      WeekendList: [
        {
          img: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          img: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }
      ]

    }
  }

}
</script>
<style lang="less" scoped>
  .Weekend-title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    margin-top: .2rem;
  }
  .item-img-wrapper
  {
    overflow: hidden;
    height: 0;
    padding-bottom:33.9% ;
  }
  .item {
    .item-img{
      width: 100%;
    }
    .item-info {
      flex: 1;
      padding: .1rem;

      .item-title {
        line-height: .54rem;
        font-size: .32rem;
      }

      .item-desc {
        line-height: .4rem;
        color: #ccc;
      }
      .item-button
      {
        margin-top: .2rem;
        color: #ffffff;
        background: #ff9300;
        padding: 0 .1rem;
        border-radius: .06rem;
        border: 0;
      }
    }
  }

</style>
