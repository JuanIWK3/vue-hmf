<script lang="ts">
import { defineComponent } from 'vue';
import api from '../api';
export default defineComponent({
  name: 'movie',
  data() {
    const moviesList: any = [];
    return { moviesList };
  },
  methods: {
    async getMovies() {
      const res = await api.get('/movies');
      this.moviesList = res.data;
    },
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <div>
    {{ $route.path }}
  </div>
</template>

<style lang="scss" scoped></style>
