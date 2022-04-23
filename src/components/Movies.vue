<script lang="ts">
import api from "./api";
import { defineComponent } from "vue";
interface Movies {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  magnet: string;
}

export default defineComponent({
  name: "home",
  data() {
    const imageURL =
      "https://homemoviefestivalbucket.s3.us-east-2.amazonaws.com/";

    const moviesList: Movies[] = [];
    return { moviesList, imageURL };
  },
  methods: {
    getData() {
      api.get("movies").then((res) => {
        this.moviesList = res.data;
        console.log(this.moviesList);
      });
    },
  },
  mounted() {
    this.getData();
  },
});
</script>

<template>
  <div class="background">
    <div class="container">
      <div class="movie" v-for="(movie, index) in moviesList" :key="index">
        <figure>
          <img :src="imageURL + movie.image" alt="" />
        </figure>
        <div class="title">
          {{ movie.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables.scss";
button {
  padding: 8px;
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
