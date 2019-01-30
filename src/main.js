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