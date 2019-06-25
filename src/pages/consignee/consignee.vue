<template>
    <!-- 修改收货人信息 -->
    <div class="wrap">
        <navtitle></navtitle>
        <div class="title">我的收货地址</div>
        <div class="container">
            <div class="boxWrap" v-for="(item,index) in list" :key="index">
                <div class="box">
                    <el-col :span="12" class="l">
                        <p>收货人：{{item.name}}</p>
                    </el-col>
                    <el-col :span="12" class="r">
                        {{item.phone}}
                    </el-col>
                </div>
                <div class="sign">
                    收货地址：{{item.address}}
                </div>
            </div>    
        </div>
        <div class="btn">新建收货人信息</div>
    </div>
</template>
<script>
require("./consignee.scss");
import navtitle from "@/compontens/navtitle";
export default {
  name: "consignee",
  components: {
    navtitle
  },
  data() {
    return {
        list:[
            {
                name:"王先生",
                phone:" 13810311440",
                address:"北京市朝阳区望京嘉美中心写字楼1221室"
            },
            {
                name:"赵先生",
                phone:" 13810311440",
                address:"北京市朝阳区望京嘉美中心写字楼1221室"
            },
            {
                name:"张先生",
                phone:" 13810311440",
                address:"北京市朝阳区望京嘉美中心写字楼1221室"
            }
        ]
    };
  },
  computed: {},
  mounted() {
    this.$store.state.HanderTitle = "修改收货人信息";
    this.$store.state.saveTitle = "";
  },
  methods: {}
};
</script>