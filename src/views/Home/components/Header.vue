<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-main">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  @import '~styles/varibles.less';
  .header {
    width: 100%;
    height: .86rem;
    display: flex;
    background: @bgColor;
    color: white;
    font-size: .25rem;
    .header-left {
      width: .64rem;
      line-height: .86rem;
      text-align: center;
    }
    .header-main {
      flex: 1;
      height: .64rem;
      margin-left: .2rem;
      background: #fff;
      border-radius: 0.05rem;
      margin-top: .12rem;
      color: #ccc;
      line-height: .64rem;
      text-indent: .15rem;
    }
    .header-right {
      width: 1.24rem;
      line-height: .86rem;
      text-align: center;
    }
    .iconfont{
      font-size: .2rem;
    }
  }
</style>
