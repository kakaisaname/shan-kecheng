<template>
  <div class="match-list">
    <cube-scroll
      ref="scroll"
      :data="kechengs" 
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      <ul class="match-inner">
              <li v-for="(item, index) in kechengs" :key="index" class="match-item" >
            <!-- <a href="http://www.baidu.com">   -->
              <img :src="item.smallimg_url" alt="" class="item-img">
              <div class="item-info" >
                  <div class="item-float">
                      <p class="item-title">{{ item.title }}</p>
                      <p class="item-desc">{{ item.desc }}</p>
                      <button class="item-button" @click="tiaozhuan(item.img_url,item.id)">观看视频</button>
                  </div>
                  <!-- <cube-button :light="true" :inline="true" class="item-button">查看详情</cube-button> -->
              </div>
            <!-- </a> -->
          </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import axios from 'axios'
import { Message } from 'element-ui'
const UP = 'up'
const DOWN = 'down'
// 处理数据


export default {
  name: 'list',
  // props: {
  //       kechengs: Array
  // },
  data () {
    return {
      kechengs:this.getKechengList(),
      options: {
        scrollbar: {
          fade: true
        },
        pullDownRefresh: {
          threshold: 90,
          stop: 50,
          txt: '刷新成功'
        },
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多的文章啦'
          }
        },
        click: false
      }
    }
  },
  methods: {
    getKechengList(){
            axios.get('http://www.hhfff.cn/api/kechengs')
            .then((res)=>{
                let data = res.data
                if (data.code != '000') {
                    Message.success('暂时没有课程，请尽情期待！') 
                } else if (data.code == '000') {
                    this.kechengs = data.data
                } 
            })
            .catch((error)=>{
               console.log(error)
               Message.error('暂时没有课程，请尽情期待！') 
            })
        },
    tiaozhuan (img_url,id) {
        if (img_url.length == 0) {
          Message.success('暂时没有课程，请尽情期待！')
        } else {
          //应该是跳转到一个页面 vue 
          // window.location.href = img_url
          //先通过课程和openid获取是否分享和是否购买
          let openid = localStorage.getItem("new_shan_wechat_oauth_openid")
          let URL = 'http://www.hhfff.cn/api/getIsBuySharedByOpenid'    
          axios.get(URL,{
              params:{
                'openid':openid,
                'kechengid':id
              }
          }).then((response) => {  //箭头函数，上下文穿透，才能用this.$router
              let res = response.data;
              let res_code = res.code;
              if (res_code == '000') {
                  //跳转到课程详细页 带上参数
                  //过几秒跳转   可能还没生成分享的图片 *** （邀请好友生成图片费时间）
                  // setTimeout(()=>{
					        //     this.$router.push({  
                  //       path: '/detail',   
                  //       name: 'detail',  
                  //       params: {   
                  //           isbuy: res.data.buy,   
                  //           isshare: res.data.share,
                  //           img: img_url,
                  //           tips: res.data.kecheng.tips,
                  //           vediourl: res.data.kecheng.video_url,
                  //           kechengid: id,
                  //           openid: openid
                  //       }
                  // }) 
                  // },2000)
                  //算了，这样用户体验不好，没生成分享图片的话自己去查有没有，没有二维码的话提示过段时间来分享
                  this.$router.push({  
                        path: '/detail',   
                        name: 'detail',  
                        params: {   
                            isbuy: res.data.buy,   
                            isshare: res.data.share,
                            img: img_url,
                            tips: res.data.kecheng.tips,
                            vediourl: res.data.kecheng.video_url,
                            kechengid: id,
                            openid: openid
                        }
                  })
              } else if (res_code == '002') {
                  //参数有误，提示课程暂时无法观看
                  Message.error('该课程暂时无法观看,谢谢！');
                  //不跳转
                  // this.$router.push('/fail');
                  return false;
              }
          })
          .catch((error) =>{
              console.log(error);
          });
        }
    },    
    subscribe () {
      this.subscribeDialog.show()
    },
    onPullingDown () {
      this.loadMatch('down')
    },
    onPullingUp () {
      this.loadMatch('up')
    },
    loadMatch (type) {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          let match = []
          for (let index = 5; index > 0; index--) {
            // match.push(this.recipeList[index])
          }
          if (type === DOWN) {
            this.kechengs.unshift(...match)
          } else if (type === UP) {
            this.kechengs = this.kechengs.concat(match)
          }
        } else {
          this.$refs.scroll.forceUpdate()
          if (type === UP) {
            setTimeout(() => {
              this.$refs.scroll.scroll.scrollBy(0, 64, 800)
            }, 1000)
          }
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus">
@import '~@/common/stylus/mixin.styl';
.match-list
  height: 600px
  background-color: #E2E5EA
  .match-inner
    background-color: #FFFFFF
    .match-item
    //   height:30px;  
      border-bottom: 1px solid #E4E4E4
      padding: 10px 0
      // display: flex
      justify-content: space-around
      .item-img       //图片的宽和高
        display: inline-block
        height: 60px
        margin-bottom: 7px
        width:60px
        padding 1%
      .item-info
        flex 1  //1自动撑开
        // height 100%
        padding .1rem
        min-width 0  //min-width 属性为给定元素设置最小宽度。它可以阻止 width 属性的应用值小于 min-width 的值。
        .item-float
          // float left  加了这个ellipsis()不生效
          text-align left //加这个，不加这个的话两行字不对齐
          .item-title
              line-height 20px
              font-size 12px;
              padding-bottom 1%
              ellipsis()
          .item-desc
              line-height 15px
              font-size 10px
              color #ccc
              padding-bottom 1%
              ellipsis()
          .item-button
              border-radius 15px
              background green
              color   #fff
        // .item-button
            // float left
            // line-height 10px
            // margin-top 2px
            // background #ff9300
            // padding 0 2px      //上下0  左右.1rem
            // border-radius 3px  //3像素  相当于0.06
            // color   #fff
</style>
