<script setup lang="ts">
import Home from "./components/Movies.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <Home />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  max-width: 100vw;
  background-image: url("https://images2.alphacoders.com/521/thumb-1920-521477.jpg");
  backdrop-filter: blur(100px);
}
</style>
