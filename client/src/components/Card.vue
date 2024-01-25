<template>
  <article
    class="card"
    :class="className"
  >
    <h2 class="card--title">
      {{ title }}
    </h2>
    <p class="card--paragraph">
      {{ paragraph }}
    </p>
    <p class="card--price">
      $ {{ price }}
    </p>
    <span>per {{ period }}</span>
    <router-link
      to="/stories"
      class="btn-2 card--button"
    >
      Pick Plan
    </router-link>
  </article>
</template>

<script>
export default {
  props: ["title", "paragraph", "price", "period", "className"],
};
</script>
