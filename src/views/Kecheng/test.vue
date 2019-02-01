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
            <div class="movie" style="width:100%;text-align: center;">
                <video controls="controls" src="http://zhou55.cn/%E8%AF%BE%E7%A8%8B%2000_00_08-00_21_40.mp4">
				    对不起；您的浏览器不支持HTML5视频在WebM和VP8 / VP9或MP4
				</video>
            </div>
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
            tips:'ssss'  
        }  
    },
    created () {
        // let buy = this.$route.params.isbuy;
        // let share = this.$route.params.isshare;
        // let imgurl = this.$route.params.img;
        // 将数据放在当前组件的数据内  
        this.isbuy = 1;
        this.isshare = 0;
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


