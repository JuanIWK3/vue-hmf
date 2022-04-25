<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'navbar',
  data() {
    const isHamOpen = false;
    return {
      moviesList: [],
      isHamOpen,
    };
  },
  methods: {
    toggleHam() {
      this.isHamOpen = !this.isHamOpen;
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div
        :class="isHamOpen ? 'active hamburger' : 'hamburger not-active'"
        @click="toggleHam()"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <router-link to="/">
        <div class="logo">
          <p>HMF</p>
        </div>
      </router-link>
    </div>
    <form v-if="$route.path !== '/login' && $route.path !== '/signup'">
      <img src="../assets/search.svg" alt="magnifying glass" />
      <input type="text" />
    </form>
    <div
      class="user"
      v-if="$route.path !== '/login' && $route.path !== '/signup'"
    >
      <router-link to="/login">
        <button>Log In</button>
      </router-link>
      <router-link to="/signup">
        <button class="secondary">Sign Up</button>
      </router-link>
    </div>
    <router-link
      to="/"
      v-if="$route.path == '/login' || $route.path == '/signup'"
    >
      <div class="close">
        <img id="close" src="../assets/close.svg" alt="close" />
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/variables.scss';

.container {
  height: 48px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba($primary-color, 0.5);
  position: relative;

  .wrapper {
    display: flex;
    align-items: center;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    margin-right: 16px;

    @media (max-width: 500px) {
      display: block;
    }

    .line {
      width: 24px;
      height: 2px;
      margin: 6px 0;
      background: $secondary-color;
    }

    &.active {
      animation: rotate90 0.5s forwards;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $secondary-color;
    cursor: pointer;
    margin-right: 16px;

    p {
      font-size: 1.5em;
      font-family: Homemade Apple, cursive;
      margin-top: 10px;
    }
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    min-width: 50px;
    max-width: 360px;

    display: flex;
    border-bottom: 1px solid rgba($secondary-color, 0.5);

    @media (max-width: 500px) {
      margin: 8px 0px;
    }

    img {
      width: 18px;
      height: 18px;
      margin: 0 8px;
    }

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: $secondary-color;
    }
  }

  .user {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-radius: 0.3rem;
    padding: 8px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: $border-radius;
    background-color: #252525;
    filter: brightness(1.5);
    cursor: pointer;

    @media (max-width: 900px) {
      background-color: rgba($secondary-color, 0.5);

      &:hover {
        background-color: rgba($secondary-color, 1);
      }
    }

    &:hover {
      background-color: rgba($secondary-color, 0.7);
    }
  }
}

@keyframes rotate90 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(90deg);
  }
}
</style>
