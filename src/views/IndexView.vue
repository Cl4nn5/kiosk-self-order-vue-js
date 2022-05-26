<template>
  <div>
    <CustomSlider></CustomSlider>
    <!-- <div>2번 영역</div>
    <div>3번 영역</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CustomSlider from "@/components/Slider/CustomSlider.vue";

export default {
  name: "IndexView",
  components: {
    CustomSlider,
  },
};
</script>
