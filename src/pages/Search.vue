<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api';
import IMovie from '../interfaces';
import Loading from '../components/Loading.vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const query = router.currentRoute.value.query;
    const movies = computed(() => store.state.searchMovies);
    const loading = ref(true);
    const baseImageURL =
      'https://homemoviefestivalbucket.s3.us-east-2.amazonaws.com/';

    const searchMovies = async (query: string) => {
      try {
        const res = await api.get('/movies');
        let filteredMovies = res.data;

        filteredMovies = filteredMovies.filter((movie: IMovie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

        store.dispatch('setSearchMovies', filteredMovies);

        loading.value = false;
      } catch (error) {}
    };

    watch(
      () => router.currentRoute.value.query,
      () => {
        query.q = router.currentRoute.value.query.q;

        searchMovies(query.q as string);
      }
    );

    onMounted(() => {
      searchMovies(query.q as string);
    });

    return {
      query,
      movies,
      loading,
      baseImageURL,
    };
  },
  components: { Loading },
};
</script>

<template>
  <div v-if="loading" class="loading"><Loading /></div>
  <div class="container" v-if="!loading">
    <div class="movie" v-for="(movie, index) in movies" :key="index">
      <router-link :to="`/movies/${movie.id}`">
        <figure>
          <img :src="baseImageURL + movie.image" alt="" />
        </figure>
        <div>
          {{ movie.title }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables';
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
}
.container {
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
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
