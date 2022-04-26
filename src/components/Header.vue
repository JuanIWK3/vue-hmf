<script>
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLogged = computed(() => store.state.auth);
    const user = computed(() => store.state.user);
    const isMenuOpen = ref(false);
    const query = ref('');

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const signOut = () => {
      store.dispatch('signOut');
    };

    const search = () => {
      if (!query.value) {
        return;
      }
      router.push({ name: 'Search', query: { q: query.value } });
    };

    return {
      moviesList: [],
      isLogged,
      isMenuOpen,
      user,
      query,
      toggleMenu,
      signOut,
      search,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <router-link to="/">
        <div class="logo">
          <p>HMF</p>
        </div>
      </router-link>
    </div>

    <form
      @keypress.enter="search()"
      v-if="$route.path !== '/login' && $route.path !== '/signup'"
    >
      <img src="../assets/search.svg" alt="magnifying glass" />
      <input type="text" v-model="query" />
    </form>

    <router-link
      to="/"
      v-if="$route.path == '/login' || $route.path == '/signup'"
    >
      <div class="close">
        <img id="close" src="../assets/close.svg" alt="close" />
      </div>
    </router-link>

    <button
      @click="toggleMenu()"
      class="user"
      v-if="$route.path !== '/login' && $route.path !== '/signup'"
    >
      <img src="../assets/user.svg" alt="" />
      <div :class="isMenuOpen ? 'menu' : 'close menu'">
        <div class="option" v-if="!isLogged">
          <router-link to="/login">
            <div>Sign In</div>
          </router-link>
        </div>
        <div class="option" v-if="!isLogged">
          <router-link to="/signup">
            <div>Sign Up</div>
          </router-link>
        </div>
        <div class="option" v-if="isLogged">
          <router-link to="/profile">
            <div>
              <img src="../assets/user.svg" alt="" />
              <p>Profile</p>
            </div>
          </router-link>
        </div>
        <div
          class="option"
          v-if="isLogged"
          @click="signOut()"
          id="logout"
          :class="isLogged && 'none'"
        >
          <div><img src="../assets/logout.svg" alt="" />Sign Out</div>
          <div>
            {{ user.email }}
          </div>
        </div>
      </div>
    </button>
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
  background: rgba(#000, 1);
  position: relative;

  .wrapper {
    display: flex;
    align-items: center;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    margin-right: 16px;

    @media (max-width: 600px) {
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
      margin-top: 10px;
    }
  }

  form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    min-width: 50px;
    max-width: 360px;

    display: flex;
    border-bottom: 1px solid rgba($secondary-color, 0.5);

    @media (max-width: 700px) {
      width: 50%;
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

  .sign {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    border-radius: 0.3rem;
    padding: 8px;

    @media (max-width: 600px) {
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

  .user {
    width: 40px;
    height: 40px;
    background: $secondary-color;
    border-radius: 50%;

    .menu {
      display: flex;
      flex-direction: column;

      position: absolute;
      right: 8px;
      top: 70px;
      padding: 8px 0;

      border-radius: $border-radius;
      border: 1px solid #111;

      background: rgba(45, 45, 45, 0.9);
      backdrop-filter: blur(4px);
      animation: expand 0.2s forwards;

      .option {
        width: 160px;
        margin: 0 8px;
        cursor: pointer;
        color: $primary-text-color;
        border-radius: $border-radius;
        text-align: left;

        div {
          display: flex;
          align-items: center;
          padding: 8px 10px;
        }

        img {
          margin-right: 10px;
        }

        &:hover {
          background-color: rgba($secondary-color, 0.7);
        }
      }

      #logout {
        display: flex;
        flex-direction: column;

        height: 64px;

        div {
          display: flex;
        }
      }
      &.close {
        display: none;
      }
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
@keyframes expand {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
