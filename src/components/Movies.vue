<script lang="ts">
import api from '../api';
import { defineComponent } from 'vue';
import Loading from './Loading.vue';
interface Movies {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  magnet: string;
}

export default defineComponent({
  name: 'home',
  data() {
    const loading = true;
    const imageURL =
      'https://homemoviefestivalbucket.s3.us-east-2.amazonaws.com/';

    const moviesList: Movies[] = [];
    return { moviesList, imageURL, loading };
  },
  methods: {
    async getData() {
      const res = await api.get('/movies');
      this.moviesList = res.data;
      this.loading = false;
      console.log('ready');
    },
  },
  components: {
    Loading,
  },
  mounted() {
    this.getData();
  },
});
</script>

<template>
  <div class="background">
    <div v-if="loading" class="loading">
      <Loading />
    </div>
    <div class="container" v-if="!loading">
      <div class="movie" v-for="(movie, index) in moviesList" :key="index">
        <router-link :to="`/movies/${movie.id}`">
          <figure>
            <img :src="imageURL + movie.image" alt="" />
          </figure>
          <div class="title">
            {{ movie.title }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';
button {
  padding: 8px;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px 16px;
  justify-content: center;
  align-content: center;
  height: 100%;
  padding: 16px;
  color: $primary-text-color;

  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: 250px;

    img {
      width: 250px;
      height: 150px;
      margin-bottom: 16px;
      object-fit: cover;
      border-radius: $border-radius;
    }
  }
}
</style>
