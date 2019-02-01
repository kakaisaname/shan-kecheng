<template>
    <div>
        <img :src="imgurl" alt="">
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
        }  
    },
    created () {
        let buy = this.$route.params.isbuy;
        let share = this.$route.params.isshare;
        let imgurl = this.$route.params.img;
        // 将数据放在当前组件的数据内  
        this.isbuy = isbuy;
        this.isshare = share;
        this.imgurl = imgurl;
        console.log("buy", buy); // 输出 test message
        console.log("share", share); // 输出 test message
        console.log("imgurl", imgurl); // 输出 test message
        console.log("isbuy", this.isbuy); // 输出 test message
    }
    // methods: {  
    //   getParams () {  
    //     // 取到路由带过来的参数   
        
    //   }  
    // },  
    // watch: {  
    // // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
    //   '$route': 'getParams'  
    // }
}
</script>

