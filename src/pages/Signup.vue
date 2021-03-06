<script lang="ts">
import { defineComponent } from 'vue';
import api from '../api';
import { validatePassword } from '../utils/validatePassword';
export default defineComponent({
  name: 'signup',
  data() {
    const passwordRef = '';
    const emailRef = '';
    const usernameRef = '';

    const { hasMinLength, hasUpperCase, hasLowerCase, hasNumber } =
      validatePassword({
        password: passwordRef,
      });

    return {
      passwordRef,
      emailRef,
      usernameRef,
      errorRef: '',
      hasMinLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
    };
  },
  methods: {
    async signup(event: Event) {
      event.preventDefault();

      try {
        await api.post('/users', {
          name: this.usernameRef,
          email: this.emailRef,
          password: this.passwordRef,
        });

        this.$router.push('/login');
      } catch (error) {
        alert('Erro ao cadastrar usuário');
      }
    },
    validate() {
      const { hasMinLength, hasUpperCase, hasLowerCase, hasNumber } =
        validatePassword({
          password: this.passwordRef,
        });

      this.hasMinLength = hasMinLength;
      this.hasUpperCase = hasUpperCase;
      this.hasLowerCase = hasLowerCase;
      this.hasNumber = hasNumber;
    },
  },
});
</script>

<template>
  <div class="container">
    <form @submit="signup($event)">
      <div class="title">Join us</div>
      <label for="username">User Name</label>
      <input v-model="usernameRef" type="text" placeholder="User1" required />
      <label for="email">Email</label>
      <input
        v-model="emailRef"
        type="email"
        placeholder="youremail@example.com"
        required
      />
      <label for="password">Password</label>
      <input
        v-model="passwordRef"
        type="password"
        placeholder="password"
        required
      />
      <div class="validators">
        <p :class="hasMinLength ? 'none minLength' : 'minLength'">
          Min length of 6 characters
        </p>
        <p :class="hasNumber ? 'none number' : 'number'">Number</p>
        <div :class="hasUpperCase ? 'none upper' : 'upper'">Uppercase</div>
        <p :class="hasLowerCase ? 'none lower' : 'lower'">Lowercase</p>
      </div>
      <div class="buttons">
        <button class="secondary" type="submit" :disabled="!validate()">
          Sign up
        </button>
        <router-link to="/login">
          <button>Login</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  form {
    display: flex;
    flex-direction: column;

    .title {
      margin: 24px 0;
      font-size: 18px;
    }

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

    .validators {
      margin-bottom: 16px;

      .minLength,
      .number,
      .upper,
      .lower {
        color: $secondary-color;

        &.none {
          display: none;
        }
      }
    }

    button {
      padding: 8px;

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
  }
}
</style>
