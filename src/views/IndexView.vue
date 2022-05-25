<template>
  <div class="home">
    <div>
      <VueSwiper />
    </div>
    <!-- <div>2번 영역</div>
    <div>3번 영역</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import VueSwiper from "@/components/Swiper/VueSwiper.vue";

export default {
  name: "IndexView",
  components: {
    VueSwiper,
  },
};
</script>
