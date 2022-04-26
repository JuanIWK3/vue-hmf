<template>
  <div class="container">
    <div class="user">
      <figure>
        <img :src="baseImageURL + user.avatar" alt="avatar" />
      </figure>
      <h1 class="name">{{ user.name }}</h1>
      <div class="email">{{ user.email }}</div>
    </div>
    <div class="user-movies">
      <div class="movies">
        <h2>Your Movies</h2>
        <Loading v-if="loading" />
        <div class="empty" v-if="!moviesList.length">
          You don't have any movies yet.
        </div>
        <div class="movie" v-for="(movie, index) in moviesList" :key="index">
          <img :src="baseImageURL + movie.poster_path" alt="movie poster" />
          <div class="movie-info">
            <h3>{{ movie.title }}</h3>
            <div class="movie-rating">
              <span>{{ movie.vote_average }}</span>
              <img src="../assets/star.svg" alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import api from '../api';
import Loading from '../components/Loading.vue';
import IMovie from '../interfaces';

export default {
  setup() {
    const moviesList: IMovie[] = [];
    const loading = ref(true);
    const store = useStore();
    const user = computed(() => store.state.user);
    const baseImageURL =
      'https://homemoviefestivalbucket.s3.us-east-2.amazonaws.com/';

    const getMovies = async () => {
      try {
        const response = await api.get(`/users/movies/${user.value.id}`);
        loading.value = false;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getMovies();
    });

    return {
      user,
      baseImageURL,
      loading,
      moviesList,
    };
  },
  components: { Loading },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    figure {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 20px;
      background: rgb(255, 255, 255);
      img {
        height: 150px;
        width: 150px;
      }
    }
  }

  .movies {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 16px 0;
    border-top: 1px solid $secondary-color;

    h2 {
      margin-top: 4px;
      margin-bottom: 16px;
    }
    .loading {
      margin: 20px 0;
    }
  }
}
</style>
