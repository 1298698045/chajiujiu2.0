<template>
    <div class="wrap">
        <navtitle @PublicSave="PublicSave"></navtitle>
        <div class="boxWrap">
            <p class="times">2017-01-01</p>
            <el-row class="cont">
                <el-col :span="5" class="left">
                    <img src="./../../assets/images/logo.jpg" alt="">
                </el-col>
                <el-col :span="15" class="center">
                    <p>王先生<span>报名参加了活动</span></p>
                    <p>武夷岩茶春季采摘节活动</p>
                </el-col>
                <el-col :span="4" class="right">
                    <div class="cell">查看</div>
                </el-col>
            </el-row>
        </div>
        <div class="boxWrap">
            <p class="times">2017-01-01</p>
            <el-row class="cont">
                <el-col :span="5" class="left">
                    <img src="./../../assets/images/logo.jpg" alt="">
                </el-col>
                <el-col :span="15" class="center">
                    <p>王先生<span>报名参加了活动</span></p>
                    <p>武夷岩茶春季采摘节活动</p>
                </el-col>
                <el-col :span="4" class="right">
                    <div class="cell">查看</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
require('./notice.scss')
import navtitle from "./../../compontens/navtitle"
export default{
    name:"notice",
    components:{
        navtitle
    },
    computed:{},
    data(){
        return {

        }
    },
    mounted() {
        this.$store.state.HanderTitle = "主题活动报名通知";
        // this.$store.state.saveTitle = "返回"
    },
    methods:{
        PublicSave(){
            alert("返回")
        }
    },
    watch:{}
}
</script>