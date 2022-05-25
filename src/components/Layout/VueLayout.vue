<template>
  <component :is="nowLayout">
    <slot></slot>
  </component>
</template>

<script>
import PCLayout from "./PCLayout.vue";
import MobileLayout from "./MobileLayout.vue";

export default {
  name: "VueLayout",
  components: {
    PCLayout,
    MobileLayout,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    nowLayout() {
      return this.isMobile ? MobileLayout : PCLayout;
    },
  },
};
</script>

<style lang="scss" scoped></style>
