<template>
  <nav class="navMenu--mobile">
    <ul class="navMenu--mobile_logo">
      <li>
        <Logo color="#000" />
      </li>
    </ul>
    <div
      class="navMenu--mobile_iconBurger"
      @click="displayMenuMobile"
      :class="{ active: active }"
    />
    <div
      v-if="menuMobile"
      class="navMenu--mobile_menuBurger"
    >
      <ul class="navMenu--mobile_linksMenuBurger">
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
          <router-link to="/Features">
            Pricing
          </router-link>
        </li>
      </ul>
      <div class="navMenu--mobile_lineMenuBurger" />
      <router-link
        to="/stories"
        class="navMenu--mobile_btn-1 btn-1"
      >
        Get an invite
      </router-link>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      menuMobile: false,
      active: "",
    };
  },
  methods: {
    displayMenuMobile() {
      this.menuMobile = !this.menuMobile;
      if (this.menuMobile == true) {
        this.active = "active";
      } else {
        this.active = "";
      }
    },
  },
};
</script>
