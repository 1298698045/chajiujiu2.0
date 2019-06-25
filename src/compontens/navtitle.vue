<template>
    <div class="Hander">
        <el-row :gutter="20">
            <el-col :span="6"><div class="back" @click="Back"><i class="el-icon-arrow-left"></i></div></el-col>
            <el-col :span="12"><div class="bg-purple">{{HanderTitle}}</div></el-col>
            <el-col :span="6"><div @click="PublicSave" class="pad">{{saveTitle}}</div></el-col>
        </el-row>
    </div>
</template>
<script>
require("../assets/scss/navtitle.scss");
export default {
  name: "navtitle",
  data() {
    return {};
  },
  components:{},
  computed:{
      // Header标题
      HanderTitle(){
        return this.$store.state.HanderTitle;
      },
      // Header保存  
      saveTitle(){
        return this.$store.state.saveTitle;
      }
  },
  data(){
      return {

      }
  },
  mounted() {
      
  },
  methods:{
      PublicSave(){
         this.$emit("PublicSave");
      },
      Back(){
          this.$router.go(-1);
      }
  },
  watch:{}
};
</script>