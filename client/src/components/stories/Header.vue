<template>
  <div class="headerStories">
    <div class="headerStories--text">
      <span class="headerStories--text_subtitle">LAST MONTH’S FEATURED STORY</span>
      <h1 class="headerStories--text_title">
        HAZY FULL MOON OF APPALACHIA
      </h1>
      <span class="headerStories--text_subtitle">March 2nd 2020 <strong>by John Appleseed</strong></span>
      <p class="headerStories--text_paragraph">
        The dissected plateau area, while not actually made up of geological
        mountains, is popularly called "mountains," especially in eastern
        Kentucky and West Virginia, and while the ridges are not high, the
        terrain is extremely rugged.
      </p>
      <router-link
        to="/stories"
        class="headerStories--text_btn btn-2"
      >
        <slot name="button" /><svg
          width="42"
          height="14"
          viewBox="0 0 42 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7H41.864"
            :stroke="color"
          />
          <path
            d="M35.4282 1L41.4282 7L35.4282 13"
            :stroke="color"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color"],
};
</script>
