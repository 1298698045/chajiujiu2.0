<template>
    <div class="wrap">
        <navtitle @PublicSave="PublicSave"></navtitle>
        <div class="nav">
            <el-col :class="{nav_cont:index == num}" :span="8" v-for="(item,index) in cont" :key="item">
               <div  @click="btnFn(index)">{{item}}</div>
            </el-col>
        </div>
        <div class="content" v-for="(item,index) in list" v-show="index == num" :key="index" @click="shows">
            <el-row class="top">
                <el-col :span="19" class="l">
                    <div class="grid-content">订单号 {{item.Order}}</div>
                </el-col>
                <el-col :span="5" class="r">
                    <div class="grid-content bg-purple-light">用户已付款</div>
                </el-col>
            </el-row>
            <el-row class="center">
                <el-row class="cents">
                    <el-col :span="5" class="l">
                        <div>
                         <img src="./../../assets/images/logo.jpg" alt="">   
                        </div>
                    </el-col>
                    <el-col :span="19" class="r">
                        <div class="ips">
                            <span>{{item.name}}</span>
                            <span>报名了 你推广的 活动</span>
                        </div>
                        <el-row class="ipv">
                            <el-col :span="14" class="l">
                                <div class="grid-content">{{item.activity}}</div>
                            </el-col>
                            <el-col :span="10" class="r">
                                <span>报名费：</span>
                                <span>{{item.price}}</span>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-row>
            <el-row class="bottom">
                <el-col :span="19" class="l">
                    <div class="grid-content"><span>合计：</span>{{item.price}}（支付：{{item.payment}}）</div>
                </el-col>
                <el-col :span="5" class="r">
                    <div class="grid-content bg-purple-light" @click="routerNotice">{{item.signup}}</div>
                </el-col>
            </el-row>
        </div>
        <div class="btnBottom" v-show="isShow" @click="routerHeadline">
            <p>请确认将钱款退给用户，避免造成不必要的损</p>
            <p>已退款给用户</p>
            <p>我还未退款</p>
        </div>
    </div>
</template>
<script>
require("./activity.scss");
import navtitle from "@/compontens/navtitle";
export default {
  name: "activity",
  components: {},
  computed: {},
  data() {
    return {
      cont: ["未处理报名(3)", "未处理退款(6)", "全部"],
      num: "",
      isShow: false,
      list: [
        {
          Order: "0031231239322123",
          imglist: ["./../../assets/images/logo.jpg"],
          name: "王先生",
          activity: "武夷岩茶春季采摘节活动",
          price: "40.00",
          payment: "36.00",
          signup: "处理报名"
        },
        {
          Order: "0031231239322123",
          imglist: [
            "./../../assets/images/logo.jpg",
            "./../../assets/images/logo.jpg"
          ],
          name: "赵先生",
          activity: "武夷岩茶春季采摘节活动",
          price: "40.00",
          payment: "36.00",
          signup: "处理报名"
        },
        {
          Order: "0031231239322123",
          imglist: [
            "./../../assets/images/logo.jpg",
            "./../../assets/images/logo.jpg"
          ],
          name: "张先生",
          activity: "武夷岩茶春季采摘节活动",
          price: "40.00",
          payment: "36.00",
          signup: "处理报名"
        }
      ]
    };
  },
  created() {
    //   this.getData();
  },
  mounted() {
    this.$store.state.HanderTitle = "测试标题";
    this.$store.state.saveTitle = "保存";
  },
  methods: {
    btnFn(index) {
      this.num = index;
    },
    shows() {
      this.isShow = !this.isShow;
    },
    routerNotice(){
        // this.$router.push({ path: "/notice" });
        this.$router.push({path:"/journalism"})
    },
    routerHeadline(){
        this.$router.push({path:"/headline"});
    },
    PublicSave() {
      alert("保存成功");
    },
    getData() {
        this.util.request({
            method:'GET',
            interface:'',
            data:{
            }
        }).then(res=>{
            console.log(res)
        })
    }
  },
  components: {
    navtitle
  },
  watch: {}
};
</script>