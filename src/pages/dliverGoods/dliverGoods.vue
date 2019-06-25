<template>
    <!-- 首页确认发货页面 -->
    <div class="wrap">
        <navtitle @PublicSave="PublicSave"></navtitle>
        <div class="title">请选择物流公司并填写物流单号</div>
        <div class="box">
            <div class="nav">
                <el-col :span="12">物流公司</el-col>
                <el-col :span="12" class="rig"><p>请选择<i class="el-icon-arrow-right"></i></p></el-col>
            </div>
            <div class="min">物流单号</div>
        </div>
    </div>
</template>
<script>
    require("./dliverGoods.scss")
    import navtitle from "@/compontens/navtitle"
    export default {
        name:"dliverGoods",
        components:{
            navtitle
        },
        computed:{

        },
        data(){
            return {

            }
        },
        mounted() {
            this.$store.state.HanderTitle = "确认发货"
            this.$store.state.saveTitle = "发货"
        },
        methods:{
            PublicSave(){
                alert("发货")
            }
        }
    }
</script>