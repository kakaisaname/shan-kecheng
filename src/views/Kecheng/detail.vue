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
         <div class="tips" id="tips" ref="share">
            <div style="margin:auto;width:70%;height:170px;background-color:white;margin-top:136px;border-radius:6px;overflow:hidden;text-align:center;">
            <div style="width:100%;background-color:#4c86f4;height:40px;line-height:40px;color:white">邀请好友</div>
            <span style="display: block;margin: auto;font-size: 13px;color: #888888;padding-top:20px;padding-left:8px;padding-right:8px">本课程现可通过邀请<span style="color:#4c86f4">3</span>个好友，获得<span style="color:#4c86f4">免费</span>学习资格，快去分享自己的邀请卡吧～</span>
            <div style="test-align:center;width:50%;border-radius:20px;margin:auto;background-color:#4c86f4;color:white;height:40px;line-height:40px;margin-top:24px" @click="hiddenTips()">生成邀请卡</div>
            </div>
        </div>
        <div class="qr" id="qr" ref="qrs">
            <img :src="qrcodeImg" style="width:240px;display:block;margin:auto;margin-top:16px" >
            <span style="display: block;margin: auto;font-size: 13px;color: #888888;">长按保存图片，3个朋友来扫码就能免费听课</span>
            <span class="close" @click="hiddenCode"><i class="cubeic-close"></i></span>
            <!-- <img class="close" src=""  style="display: block;margin:14px auto 6px auto;width: 30px;cursor: pointer;" @click="hiddenCode()"> -->
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
        let buy = this.$route.params.isbuy;
        let share = this.$route.params.isshare;
        let imgurl = this.$route.params.img;
        let tips = this.$route.params.tips;
        let vediourl = this.$route.params.vediourl;
        let openid = this.$route.params.openid;
        let kechengid = this.$route.params.kechengid;

        localStorage.setItem('shan_buy',buy)
        localStorage.setItem('shan_share',share)
        localStorage.setItem('shan_imgurl',imgurl)
        localStorage.setItem('shan_tips',tips)
        localStorage.setItem('shan_vediourl',vediourl)
        localStorage.setItem('shan_openid',openid)
        localStorage.setItem('shan_kechengid',kechengid)
        // 将数据放在当前组件的数据内

        this.isbuy = localStorage.getItem('shan_buy');
        this.isshare = localStorage.getItem('shan_share');
        this.imgurl = localStorage.getItem('shan_imgurl');
        this.tips = localStorage.getItem('shan_tips');
        this.openid = localStorage.getItem('shan_openid');
        this.kechengid = localStorage.getItem('shan_kechengid');
        this.qrcodeImg = 'http://118.24.61.194:8089/qrcode/'+this.openid+'_'+this.kechengid+'.jpg';
        this.playerOptions.sources[0].src = localStorage.getItem('shan_vediourl',vediourl);
    },
    methods: {
        showTips () {
            this.$refs.share.style.display="inline";
        },
        hiddenTips () {
            this.$refs.share.style.display="none";
            //也是过两秒才跳转
            setTimeout(()=>{
                this.showCode()
            },3000)
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


