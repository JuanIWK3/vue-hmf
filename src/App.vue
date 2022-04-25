<script setup lang="ts">
import Home from './components/Movies.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
@import './styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Inter:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  max-width: 100vw;
  background-image: url('https://wallpapersmug.com/large/d853d8/violet-bend-abstract-dark.jpg');
  background-position: center;
  backdrop-filter: blur(20px);
  color: $primary-text-color;
  background-color: aqua;
  font-family: 'Inter', sans-serif;
}

input {
  color-scheme: dark;
}

input:-webkit-autofill {
  box-shadow: inset 0 0 0 1px $secondary-color,
    inset 0 0 0 100px rgba(0, 0, 0, 0);
}

a {
  color: unset;
  text-decoration: none;
}
</style>
