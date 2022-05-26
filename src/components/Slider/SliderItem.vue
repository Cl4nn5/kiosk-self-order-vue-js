<template>
  <component :is="tag" :style="slideWidth">
    <h2 :style="slideHeight">{{ `${item.name}_${item.idx}` }}</h2>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "li",
    },
    slideWidth: Object,
    slideHeight: Object,
    propsItem: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      item: this.propsItem,
    };
  },
};
</script>
