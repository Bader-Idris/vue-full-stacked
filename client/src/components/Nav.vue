<template>
  <nav class="navMenu">
    <div class="navMenu--desktop">
      <ul class="navMenu--desktop_logo">
        <li>
          <Logo color="#000" />
        </li>
      </ul>
      <ul class="navMenu--desktop_links">
        <li>
          <router-link to="/stories">
            Stories
          </router-link>
        </li>
        <li>
          <router-link to="/Features">
            Features
          </router-link>
        </li>
        <li>
          <router-link to="/Pricing">
            Pricing
          </router-link>
        </li>
      </ul>
      <router-link
        to="/stories"
        class="navMenu--desktop_btn1 btn-1 a-btn"
      >
        get an invite
      </router-link>
    </div>
    <NavMobile />
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";
import NavMobile from "@/components/NavMobile.vue";

export default {
  components: {
    Logo,
    NavMobile,
  },
};
</script>

<style lang="scss" scoped></style>
