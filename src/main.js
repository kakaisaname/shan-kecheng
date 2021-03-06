import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import {
  /* eslint-disable no-unused-vars */
  Button,
  Loading,
  Popup,
  Toast,
  Picker,
  Scroll,
  Slide,
  createAPI
} from 'cube-ui'
import SubscribeDialog from '@/components/subscribe-dialog/subscribe-dialog'
import { Message } from 'element-ui';
// import GongzonghaoDialog from '@/components/share-dialog/gongzonghao-dialog'
createAPI(Vue, SubscribeDialog, [], true)
// createAPI(Vue, GongzonghaoDialog, [], true)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(Scroll)
Vue.use(Slide)
// Vue.use(Message)  去掉，不然进入答题就会有消息（空的）
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach(( to, from, next ) => {
  if (!window.initUrl) {
    window.initUrl = location.href.split('#')[0]
  }
  next()
  if (to.name == 'empty') {
    // let wechatopenid = localStorage.getItem('new_shan_wechat_oauth_openid');
    window.location.href = 'http://www.hhfff.cn/kecheng_oauth.php';
    // router.push('/list');
    // if (typeof(wechatopenid) == "undefined" || !wechatopenid) {//如果没有token,则让它授权 
    //   //保存当前路由地址，授权后还会跳到此地址
    //   //授权请求,并跳转http://www.hhfff.cn/oauth2.php路由页面
    //   window.location.href = 'http://www.hhfff.cn/kecheng_oauth.php';
    // } else {
    //   //不用授权了
    //   //跳转到答题页 
    //   router.push('/list');
    //   // this.$router.push('/list');
    // }
  } else {
    next();
  }
})