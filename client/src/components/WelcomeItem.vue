<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <!-- <RouterLink></RouterLink> -->
      </li>
      <li>
        <!-- <RouterLink></RouterLink> -->
      </li>
      <li>
        <!-- <RouterLink></RouterLink> -->
      </li>
    </ul>
    <div class="logo">
      <!-- <router-link to="../../public/logo.svg"></router-link> -->
      <li>
        <Logo color="#000" />
      </li>
      <li>
        <Nav></Nav>
      </li>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Logo,
    Nav,
  },
};
</script>
<style scoped></style>
