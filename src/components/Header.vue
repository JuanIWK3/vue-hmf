<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "navbar",
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
      <div class="logo">HMF</div>
    </div>
    <form>
      <img src="../assets/search.svg" alt="magnifying glass" />
      <div class="search"><input type="text" /></div>
    </form>
    <div class="user"><button>Log In</button><button>Sign Up</button></div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables.scss";
@keyframes rotate90 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
.container {
  height: 48px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $primary-color;
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
    font-size: 1.5em;
    color: $secondary-color;
    cursor: pointer;
    padding: 4px;
    margin-right: 16px;
  }
  form {
    width: 100%;
    min-width: 50px;
    max-width: 360px;

    display: flex;
    background-color: #333;
    border: none;
    border-radius: 0.3rem;
    padding: 8px;

    @media (max-width: 500px) {
      margin: 8px 0px;
    }

    input {
      margin-left: 8px;
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
    background: $primary-color;
    border: none;
    border-radius: 0.3rem;
    padding: 8px;

    @media (max-width: 500px) {
      display: none;
    }

    button {
      width: max-content;
      background-color: transparent;
      padding: 8px;
      border: none;
      border-radius: 0.3rem;
      outline: none;
      color: $secondary-color;
      cursor: pointer;

      &:last-child {
        background-color: $secondary-color;
        color: $primary-text-color;
      }
    }
  }
}
</style>
