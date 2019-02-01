<template>
  <div>
    <!-- <list></list> -->
  </div>
</template>

<script>
import list from './kecheng_list'
export default {
  name:'kecheng',
  // components:{
  //   list
  // }
  mounted () {
    this.isweixin();
	},
  methods: {
    isweixin() {
          const ua = window.navigator.userAgent.toLowerCase();
          if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            //是微信环境 
            this.$router.push('/empty')
          } else {
			      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx87b7db7c08baa173&redirect_uri=sss&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
          }
      	},
  },
}
</script>
