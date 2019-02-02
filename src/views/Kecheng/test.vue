<template>
    <div>
        <div v-if="isbuy !=0 || isshare !=0">
            <video-player  class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            >
            </video-player>
        </div>
        <div v-else>
           <img :src="imgurl" alt="" class="img">
            <div class="bottom" >
                <div class="kecheng_tips" >{{ tips }}</div>
                <div class="lingqu" @click="showTips()" >邀请好友</div>
                <div class="goumai" @click="buy()" >立即购买</div>      
            </div> 
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'detail',
    data () {
        return {  
            isbuy: '',  
            isshare: '',  
            imgurl: '', 
            tips: '',
            openid: '',     //openid
            kechengid: '',  //课程id
            qrcodeImg:'', 
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
        let buy = 0;
        let share = 0;
        let imgurl = '';
        let tips = 'ds';
        let vediourl = '';
        let openid = 'o-l6w0e_dqQ2FWmpfOdIuBIOhQJ0';
        let kechengid = 1;

        sessionStorage.setItem('shan_buy',buy)
        sessionStorage.setItem('shan_share',share)
        sessionStorage.setItem('shan_imgurl',imgurl)
        sessionStorage.setItem('shan_tips',tips)
        sessionStorage.setItem('shan_vediourl',vediourl)
        sessionStorage.setItem('shan_openid',openid)
        sessionStorage.setItem('shan_kechengid',kechengid)
        // 将数据放在当前组件的数据内

        this.isbuy = sessionStorage.getItem('shan_buy');
        this.isshare = sessionStorage.getItem('shan_share');
        this.imgurl = sessionStorage.getItem('shan_imgurl');
        this.tips = sessionStorage.getItem('shan_tips');
        this.openid = sessionStorage.getItem('shan_openid');
        this.kechengid = sessionStorage.getItem('shan_kechengid');
        this.qrcodeImg = 'http://118.24.61.194:8089/qrcode/'+this.openid+'.jpg';
        this.playerOptions.sources[0].src = sessionStorage.getItem('shan_vediourl',vediourl);
    },
    methods: {
        showTips () {
            this.$refs.share.style.display="inline";
        },
        hiddenTips () {
            this.$refs.share.style.display="none";
            this.showCode()
        },
        showCode () {
            //去生成 带参的二维码图片
            this.$refs.qrs.style.display="inline"
        },
        hiddenCode () {
            this.$refs.qrs.style.display="none"
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
     .video-js .vjs-big-play-button{
        /*
        播放按钮换成圆形
        */
        height: 2em;
        width: 2em;
        line-height: 2em;
        border-radius: 1em;
    }
    .tips{
        display: none;
        width:100%; 
        background-color:rgba(0,0,0,0.7);
        height:100%;
        position:fixed; top:0; left:0; z-index:100;         
    }
    .qr{
            /*visibility: hidden;*/
        display: none;
        margin: auto;
        width: 80%;
        position: fixed;
        background-color: white;
        top: 35px;
        left: 10%;
        text-align: center;
        box-shadow:3px 5px 8px 5px  rgba(184,184,184,0.5);
        z-index: 1000;
    }
</style>


