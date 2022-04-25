<script lang="ts">
import { defineComponent } from 'vue';
import Movies from '../components/Movies.vue';
export default defineComponent({
  name: 'home',
  components: {
    Movies,
  },
});
</script>

<template>
  <div>
    <Movies />
  </div>
</template>

<style lang="scss"></style>
