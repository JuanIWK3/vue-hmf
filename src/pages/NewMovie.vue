<template>
  <div class="container">
    <form @submit="addMovie($event)">
      <label for="title">Title</label>
      <input type="text" required />
      <label for="description">Description</label>
      <input type="text" required />
      <label for="release-date">Release Date</label>
      <input type="date" required />
      <label for="image">Image</label>
      <label for="magnet">Magnet</label>
      <input type="text" required />
      <input type="file" required />
      <button class="secondary">Add New Movie</button>
    </form>
  </div>
</template>

<script>
import api from '../api';
import { ref } from 'vue';
export default {
  setup() {
    const titleRef = ref('');
    const descriptionRef = ref('');
    const releaseDateRef = ref('');
    const magnetRef = ref('');
    const imageRef = ref(null);

    const addMovie = async (event) => {
      event.preventDefault();

      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      };
      console.log(imageRef);

      if (!imageRef) {
        return;
      }

      const data = new FormData();
      data.append('title', titleRef.value);
      data.append('description', descriptionRef.value);
      data.append('releaseDate', releaseDateRef.value);
      data.append('image', imageRef.value);

      try {
        await api.post('/movies/createmovie', {
          title: titleRef,
          description: descriptionRef,
          release_date: releaseDateRef,
          image: imageRef,
        });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      titleRef,
      descriptionRef,
      releaseDateRef,
      imageRef,
      magnetRef,
      addMovie,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      padding: 16px;
      margin: 8px 0 16px 0;
      color: $primary-text-color;
      background: transparent;
      background: rgba($primary-color, 0.5);
      border: none;
      border-radius: $border-radius;
      filter: brightness(1.5);

      &:focus {
        outline: none;
      }

      @media (max-width: 768px) {
        width: 80vw;
      }

      @media (min-width: 768px) {
        width: 730px;
      }

      @media (min-width: 900px) {
        width: 360px;
      }
    }
  }
}
</style>
