<script lang="ts">
import { defineComponent } from 'vue';
import api from '../api';
import IMovie from '../interfaces';
export default defineComponent({
  name: 'movie',
  data() {
    const movie = {} as IMovie;
    const imageURL =
      'https://homemoviefestivalbucket.s3.us-east-2.amazonaws.com/';
    const loading = true;
    return { movie, loading, imageURL };
  },
  methods: {
    async getMovies() {
      const res = await api.get('/movies');
      this.loading = false;
      this.movie = res.data[parseInt(this.$route.params.id as string)];
    },
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <div class="container">
    <div class="movie" v-if="movie && !loading">
      <div class="title">{{ movie.title }}</div>
      <img :src="imageURL + movie.image" alt="movie thumb" />
      <div class="description">{{ movie.description }}</div>
    </div>
    <div v-if="loading">loading</div>
    <div v-if="!loading && !movie">Erro ao carregar filme</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    max-width: 900px;
    text-align: center;

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .description {
      font-size: 16px;
      margin-top: 16px;
    }
  }
}
</style>
