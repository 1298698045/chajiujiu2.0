<template>
    <!-- 处理报名并付款 -->
    <div class="wrap">
        <navtitle></navtitle>
        <div class="contentWrap" v-for="(item,index) in list" :key="index">
            <div class="header_name">{{item.name}}</div>
            <el-row :gutter="20" class="center">
                <el-col :span="7">
                    <div class="grid-content bg-purple">
                        <img src="./../../assets/images/logo.jpg" alt="">
                    </div>
                </el-col>
                <el-col :span="17" class="right">
                    <div class="pName">
                        武夷岩茶春季采摘节活动
                    </div>
                    <div class="huodong">
                        <span>活动报名费:<span class="spans">￥{{item.actprice}}</span></span>
                        <span>&nbsp;&nbsp;推广提成:<span class="spans">￥{{item.extract}}</span></span>
                    </div>
                </el-col>
            </el-row>
            <div class="price">
                <p>支付：<span>￥{{item.price}}</span></p>
            </div>
        </div>
        <div class="payment"  v-for="(item,index) in list">
            <el-row :gutter="20">
                <el-col :span="12" class="left">
                    <p>支付方式</p>
                </el-col>
                <el-col :span="12" class="r">
                    <p>
                        <span>{{item.mode}}</span>
                        <i class="el-icon-arrow-right"></i>
                    </p>
                </el-col>
            </el-row>
        </div>
        <div class="footerbtn"  v-for="(item,index) in list">
           <el-col :span="12" class="left">
               <p>合计：<span>￥{{item.total_price}}</span></p>
           </el-col>
           <el-col :span="12" class="right">
                <el-button class="btn" type="primary">确认并付款</el-button>
           </el-col>
        </div>
    </div>
</template>
<script>
require("./headline.scss");
import navtitle from "@/compontens/navtitle";
export default {
  name: "headline",
  components: {
    navtitle
  },
  computed: {},
  data() {
    return {
        list:[
            {
                name:"康龄轩",
                imgLogo:"./../../assets/images/logo.jpg",
                actprice:"40.00",
                extract:"40.00",
                price:"36.00",
                mode:"余额支付",
                total_price:"36.00"
            }
        ]
    };
  },
  created() {},
  mounted() {
    this.$store.state.HanderTitle = "处理报名并付款";
    // this.$store.state.saveTitle = "保存";
  },
  methods: {},
  watch: {}
};
</script>