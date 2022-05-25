<template>
  <div>
    <PCHeader v-if="isHeader" />
    <router-view></router-view>
    <PCFooter v-if="isFooter" />
  </div>
</template>

<script>
import PCHeader from "../Header/PCHeader.vue";
import PCFooter from "../Footer/PCFooter.vue";

export default {
  name: "PCLayout",
  components: {
    PCHeader,
    PCFooter,
  },
  data() {
    return {
      isHeader: true,
      isFooter: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
