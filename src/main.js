import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/border.css'
import 'styles/reset.css'
import fastClick from 'fastclick'
import 'styles/iconfont.css'

fastClick.attach(document.body)

// rem 布局：
// 适配；手机屏幕大小不同
// 设计稿：公司中提供的设计稿一般是750px;  盒子150px;  fontSize:100px;   1.5rem
// 手机屏幕                    375px   盒子75px;   fontSize:50px    1.5rem
//                           320px   盒子64px;   fontSize:        1.5rem

// rem :单位； 是一个相对的值；html的font-size的属性值就是一个rem值；
// 当前页面的html的fontSize的值；
// 利用了当前屏幕和750的比等于屏幕的fontSize和750的fontSize的比例相同；
// 不同的屏幕大小设置不同的font-size值；

function computedFontSize () {
  console.log(100)
  let winW = document.documentElement.clientWidth// 750px   100px
  document.documentElement.style.fontSize = winW / 750 * 100 + 'px'
}
// resize : 当屏幕的窗口的大小发生改变时，执行这个方法；
window.addEventListener('resize', computedFontSize)
computedFontSize()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
