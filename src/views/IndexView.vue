<template>
  <div>
    <CustomSlider :slideWidth="0" />
    <section class="btn-section">
      <div>2번 영역</div>
      <div>3번 영역</div>
    </section>
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

<style lang="scss" scoped>
// #region var
.flex-middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
// #endregion
.btn-section {
  @extend .flex-middle;

  & > div {
    flex: 1;
  }
}
</style>
