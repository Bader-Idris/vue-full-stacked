<template>
  <div class="container">
    <div class="not-found">
      <p>404</p>
      <router-link to="/">
        <span>
          back to main page
        </span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: hsl(0, 0%, 80%);
  height: 49vh;
  .not-found {
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      color: #fff;
      font-weight: bold;
      font-size: 120px;
    }
    a {
      font-weight: bold;
      cursor: pointer;
      padding-left: 65px;
    }
  }
}
</style>
