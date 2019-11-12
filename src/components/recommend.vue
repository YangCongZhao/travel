<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) in recommendList" :key="index">

        <div class="item-img-wrapper">
          <img class="item-img" :src="item.img" alt="">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>

      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      recommendList: [
        {
          img: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          img: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }, {
          img: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        }
      ]

    }
  }

}
</script>
<style lang="less" scoped>
  .recommend-title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    margin-top: .2rem;
  }

  .item {
    display: flex;
    height: 1.9rem;
    /*background: red;*/
    overflow: hidden;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;

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
