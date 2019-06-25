<template>
    <!-- 新闻头条 -->
    <div class="wrap">
        <navtitle class="style"></navtitle>
        <swiper :Images="parentMsg"></swiper>
        <div class="contWrap">
            <div class="box">
                <h1>桔普茶的历史故事的新闻一条</h1>
                <p>2018.03.12 18:30</p>
            </div>
            <div class="center">
                <p>&nbsp;&nbsp;桔普茶的历史故事的新闻一条桔普茶的历史故事的新闻一条桔普茶的历史故事的新闻一条桔普茶的历史故事的新闻一条桔普茶的历史故事的新闻一条桔普茶的历史故事的新闻一条</p>
            </div>
        </div>
    </div>
</template>
<script>
require("./journalism.scss");
import swiper from "@/compontens/swiper";
import navtitle from "@/compontens/navtitle";
export default {
  name: "journalism",
  components: {
    swiper,
    navtitle
  },
  data() {
    return {
      parentMsg: [
        {
          img:
            "https://goss.veer.com/creative/vcg/veer/800water/veer-131849331.jpg"
        }
      ]
    };
  }
};
</script>