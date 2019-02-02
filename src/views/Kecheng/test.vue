<template>
    <div>
        <img src="http://zhou55.cn/00000001.jpg" alt="" class="img">
        <div class="bottom" >
             <div class="kecheng_tips" >{{ tips }}</div>
             <div class="lingqu" @click="showTips()" >邀请好友</div>
             <div class="goumai" @click="buy()" >立即购买</div>         
         </div>
         <div class="tips" id="tips" ref="share">
            <div style="margin:auto;width:70%;height:170px;background-color:white;margin-top:136px;border-radius:6px;overflow:hidden;text-align:center;">
            <div style="width:100%;background-color:#4c86f4;height:40px;line-height:40px;color:white">邀请好友</div>
            <span style="display: block;margin: auto;font-size: 13px;color: #888888;padding-top:20px;padding-left:8px;padding-right:8px">本课程现可通过邀请<span style="color:#4c86f4">3</span>个好友，获得<span style="color:#4c86f4">免费</span>学习资格，快去分享自己的邀请卡吧～</span>
            <div style="test-align:center;width:50%;border-radius:20px;margin:auto;background-color:#4c86f4;color:white;height:40px;line-height:40px;margin-top:24px" @click="hiddenTips()">生成邀请卡</div>
            </div>
        </div>
        <div class="qr" id="qr" ref="qrs">
            <img :src="qrcodeImgUrlPre+qrcodeImg" style="width:240px;display:block;margin:auto;margin-top:16px" >
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
            qrcodeImgUrlPre: 'http://118.24.61.194:8089/qrcode/',
            isbuy: '',  
            isshare: '',  
            imgurl: '',
            tips:'ssss',
            openid:'o-l6w0e_dqQ2FWmpfOdIuBIOhQJ0',
            kechengid: 1,
            qrcodeImg:'', 
        }  
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
    },
    mounted () {
        this.qrcodeImg = this.openid+'.jpg'
        //进来就去生成图片
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


