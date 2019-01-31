import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
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
// import GongzonghaoDialog from '@/components/share-dialog/gongzonghao-dialog'
createAPI(Vue, SubscribeDialog, [], true)
// createAPI(Vue, GongzonghaoDialog, [], true)

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
    let wechatopenid = localStorage.getItem('shan_wechat_oauth_openid');
    if (typeof(wechatopenid) == "undefined" || !wechatopenid) {//如果没有token,则让它授权 
      //保存当前路由地址，授权后还会跳到此地址
      //授权请求,并跳转http://www.hhfff.cn/oauth2.php路由页面
      window.location.href = 'http://www.hhfff.cn/kecheng_oauth.php';
    } else {

    }
  }
})