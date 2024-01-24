<template>
  <article class="cardTablet" :class="className">
    <div class="cardTablet--text">
      <h2 class="card--title">{{ title }}</h2>
      <p class="card--paragraph">{{ paragraph }}</p>
      <router-link to="/stories" class="btn-2 card--button"
        >Pick Plan</router-link
      >
    </div>
    <div class="cardTablet--price">
      <p class="card--price">$ {{ price }}</p>
      <span>per {{ period }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: ["title", "paragraph", "price", "period", "className"],
};
</script>
