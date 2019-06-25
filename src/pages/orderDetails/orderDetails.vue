<template>
    <!-- 订单详情页 -->
    <div class="wrap">
        <navtitle></navtitle>
        <div class="boxWrap">
            <div class="max">
                <el-col :span="12" class="left">
                    <p>已付款，等待发货</p>
                </el-col>
                <el-col :span="12" class="right">
                    <img src="" alt="">
                </el-col>
            </div>
            <div class="inform">
                <el-col :span="2" class="licons">
                    <img src="./../../assets/images/Pinpoint.png" alt="">
                </el-col>
                <el-col :span="22" class="rigth">
                    <div class="boxp clearFix">
                        <p>收货人：王先生</p>
                        <p>13810311440</p>
                    </div>
                    <p class="pis">收货地址：北京市朝阳区望京嘉美中心写字楼1221室</p>
                </el-col>
            </div>
            <div class="contentWrap">
                <div class="header">
                    <p>订单号 0031231239322123 <span>用户订单</span></p>
                </div>
                <el-row class="boxs"  v-for="(item,index) in list" :key="index">
                    <el-col :span="5" class="left">
                        <img src="./../../assets/images/logo.jpg" alt="">
                    </el-col>
                    <el-col :span="14" class="center">
                        <div class="top">{{item.title}}</div>
                        <div class="bottom">售价：<span>￥{{item.price}}</span></div>
                    </el-col>
                    <el-col :span="5" class="right">
                       <p>x{{item.number}}</p>
                    </el-col>
                </el-row>
                <el-row class="box">
                    <div class="size">
                        <el-col :span="12" class="left">商品总价：</el-col>
                        <el-col :span="12" class="right">￥1752.00</el-col>
                    </div>
                     <div class="size">
                        <el-col :span="12" class="left">满减：</el-col>
                        <el-col :span="12" class="right">-￥200.00</el-col>
                    </div>
                     <div class="size">
                        <el-col :span="12" class="left">首单优惠：</el-col>
                        <el-col :span="12" class="right">-￥0.00</el-col>
                    </div>
                </el-row>
                <el-row class="guren">
                    <el-col :span="12" class="left">
                        合计：
                    </el-col>
                    <el-col :span="12" class="right">￥1552.00</el-col>
                </el-row>
            </div>
            <div class="prices">
                <el-col :span="12" class="l">
                    <p>支付方式</p>
                </el-col>
                <el-col :span="12" class="r">
                    <p><span>微信支付</span><i class="el-icon-arrow-right"></i></p>
                </el-col>
            </div>
            <div class="container">
                <p>订单号：0031231239322123</p>
                <p>下单时间：2016-11-21 10:53 </p>
                <p>付款时间：2016-11-21 10:53 </p>
                <p>发货时间：</p>
                <p>收货时间：</p>
            </div>
        </div>
         <div class="buttons">确认发货</div>
    </div>
</template>
<script>
require("./orderDetails.scss")
import navtitle from "@/compontens/navtitle";
export default {
    name:"orderDetails",
    components:{
        navtitle
    },
    data(){
        return { 
            list:[
                {
                    title:"武夷岩茶春季采摘节活动",
                    imglist: ["./../../assets/images/logo.jpg"],
                    price:"40.00",
                    number:1
                },
                {
                    title:"武夷岩茶春季采摘节活动",
                    imglist: ["./../../assets/images/logo.jpg"],
                    price:"40.00",
                    number:2
                },
                {
                    title:"武夷岩茶春季采摘节活动",
                    imglist: ["./../../assets/images/logo.jpg"],
                    price:"40.00",
                    number:3
                }, {
                    title:"武夷岩茶春季采摘节活动",
                    imglist: ["./../../assets/images/logo.jpg"],
                    price:"40.00",
                    number:3
                }
            ]
        }
    },
    mounted() {
        this.$store.state.HanderTitle = "订单详情";
        this.$store.state.saveTitle = "";  
    },
    methods:{

    },
    watch:{}

}
</script>