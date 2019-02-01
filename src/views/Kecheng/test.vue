<template>
    <div>
        <div v-if="isbuy || isshare">
            <img src="http://zhou55.cn/00000001.jpg" alt="" class="img">
            <div class="bottom" >
                <div class="kecheng_tips" >{{ tips }}</div>
                <div class="lingqu" @click="showTips()" >邀请好友</div>
                <div class="goumai" @click="buy()" >立即购买</div>      
            </div>
        </div>
        <div v-else>
            <video-player  class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            >
            </video-player>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail',
    data () {
        return {  
            isbuy: '',  
            isshare: '',  
            imgurl: '',
            tips:'ssss',
            playerOptions : {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: "video/ogg",
                    type:"video/webm",
                    type: "video/mp4",
                    src: "" //url地址
                }],
                poster: "../../assets/img/share.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
                }
            }   
        }  
    },
    created () {
        // let buy = this.$route.params.isbuy;
        // let share = this.$route.params.isshare;
        // let imgurl = this.$route.params.img;
        // 将数据放在当前组件的数据内  
        this.isbuy = 0;
        this.isshare = 0;
        this.playerOptions.sources[0].src = "http://zhou55.cn/%E8%AF%BE%E7%A8%8B%2000_00_08-00_21_40.mp4"
        // this.imgurl = imgurl;
    },
    methods: {
        buy() {
            alert(this.isbuy)
        }
    }
}
</script>

<style lang="less" scoped>
    .img{
        width: 100%;
        margin-bottom:100px
    }
    .bottom{
		background-color: white;
		width: 100%;
		position: fixed;
		bottom: 0;			
    }
    .kecheng_tips{
        float: left;
		color: #e06522;
		padding-left: 2.6vw;
		font-size: 4.8vw;
                
        height:15vw;
        line-height:15vw
    }
	.lingqu{
		background-color: #2d79df;
	}
	.goumai{
		background-color: #5b9df7;
    }
    .goumai,.lingqu{
		float: right;
		text-align: center;
		color: white;
		padding-left: 4.2vw;
        padding-right:4.2vw;
		font-size: 4.2vw;
        font-weight:300;
        height:15vw;
        line-height:15vw;		
    }
    .goumai:active
     {
        background-color:#666666;
        cursor:pointer;
     }
     .lingqu:active
     {
        background-color:#666666;
        cursor:pointer;
     }
</style>


