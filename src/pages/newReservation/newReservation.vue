<template>
    <!-- 新预约到店 -->
    <div class="wrap">
        <navtitle></navtitle>
        <div class="container" v-for="(item,index) in list" :key="index">
            <div class="top">
                <el-col :span="12" class="left">
                    <p>订单号 {{item.order_number}}</p>
                </el-col>
                <el-col :span="12" class="right">
                    <p>{{item.member}}</p>
                </el-col>
            </div>
            <div class="center">
                <el-col :span="3" class="l">
                    <img src="./../../assets/images/logo.jpg" alt="">
                </el-col>
                <el-col :span="21" class="r">
                    <p class="pls">{{item.name}} <span>{{item.phone}}</span></p>
                    <div class="pBox">
                        <p>包间数：{{item.private_Room}}</p>
                        <p>预约时间：{{item.time}}</p>
                        <p>备注：{{item.remarks}}</p>
                    </div>
                </el-col>
            </div>
            <div class="bottom">
                <el-col :span="12" class="lx">
                    联系客人
                </el-col>
                <el-col :span="12" class="kr">
                    客人已到店
                </el-col>
            </div>
        </div>
    </div>
</template>
<script>
    require("./newReservation.scss")
    import navtitle from "@/compontens/navtitle"
    export default {
        name:"newReservation",
        components:{
            navtitle
        },
        computed:{

        },
        data(){
            return{
                list:[
                    {
                        order_number:"0031231239322123",
                        member:"本店会员",
                        name:"王先生",
                        phone:"13810311440",
                        private_Room:"1间",
                        time:"11月30日 13:30-17:30",
                        remarks:"6个人，要带麻将桌的包间"
                    },
                     {
                        order_number:"0031231239322123",
                        member:"本店会员",
                        name:"王先生",
                        phone:"13810311440",
                        private_Room:"1间",
                        time:"11月30日 13:30-17:30",
                        remarks:"6个人，要带麻将桌的包间"
                    },
                     {
                        order_number:"0031231239322123",
                        member:"来自康龄轩的小程序",
                        name:"王先生",
                        phone:"13810311440",
                        private_Room:"1间",
                        time:"11月30日 13:30-17:30",
                        remarks:"6个人，要带麻将桌的包间"
                    }
                ]
            }
        },
        methods:{

        },
        mounted() {
            this.$store.state.HanderTitle = "新预约到店"
            this.$store.state.saveTitle = ""
        },
    }

</script>