<template>
  <article class="articleTicket" :class="classNameArticleTicket">
    <div class="articleTicket--text">
      <div class="articleTicket--text_contain">
        <h2 class="h2-large">
          <slot name="title"></slot>
        </h2>
        <p>
          <slot name="paragraphe"></slot>
        </p>
        <router-link to="/stories" class="btn-2" v-if="color !== ''">
          <slot name="button"></slot
          ><svg
            width="42"
            height="14"
            viewBox="0 0 42 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7H41.864" :stroke="color" />
            <path d="M35.4282 1L41.4282 7L35.4282 13" :stroke="color" />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="articleTicket--image" :class="classNameImage"></div>
  </article>
</template>

<script>
export default {
  props: ["color", "classNameImage", "classNameArticleTicket"],
};
</script>
