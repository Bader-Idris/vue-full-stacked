<template>
  <article
    class="article"
    :class="className"
  >
    <div class="article--containText">
      <p class="article--containText_date">
        {{ date }}
      </p>
      <h3 class="article--containText_title">
        {{ title }}
      </h3>
      <p class="article--containText_author">
        by {{ author }}
      </p>
      <router-link
        to="/stories"
        class="btn-2 article--containText_btn"
      >
        read story<svg
          width="42"
          height="14"
          viewBox="0 0 42 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7H41.864"
            stroke="white"
          />
          <path
            d="M35.4282 1L41.4282 7L35.4282 13"
            stroke="white"
          /></svg>
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ["date", "title", "author", "className"],
};
</script>
