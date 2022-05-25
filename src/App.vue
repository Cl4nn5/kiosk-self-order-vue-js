<template>
  <div id="app">
    <VueLayout>
      <router-view />
    </VueLayout>
  </div>
</template>

<script>
import VueLayout from "./components/Layout/VueLayout.vue";

export default {
  name: "APP",
  components: {
    VueLayout,
  },
  data() {
    return {
      vueLayout: "PCLayout",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
