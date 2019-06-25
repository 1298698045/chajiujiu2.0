<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="imgs in Images" :key="imgs.id">
                <img :src="imgs.img" alt="">
                </div>
            </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: ["Images"],
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: 4000,
      onTouchEnd: function() {}
    });
  }
};
</script>