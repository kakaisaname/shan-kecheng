<template>
    <div>
        <img :src="imgurl" alt="" class="img">
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
        this.isbuy = buy;
        this.isshare = share;
        this.imgurl = imgurl;
    }
}
</script>

<style lang="less" scoped>
    .img{
        width: 100%;
        margin-bottom:100px
    }
</style>


