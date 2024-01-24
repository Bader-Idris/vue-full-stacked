<template>
  <div id="app">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<!-- <script setup> 🔴it was setup🔴-->
<script>
import { RouterLink, RouterView } from "vue-router";

import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  // @import "./sass/main.scss";

  //transition router
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s opacity ease-in-out;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>
