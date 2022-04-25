<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'login',
  data() {
    const passwordRef = '';
    const hasMinLength = false;
    return {
      passwordRef,
      emailRef: '',
      errorRef: '',
      hasMinLength,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
    };
  },
  methods: {
    validate() {
      const pass = this.passwordRef;
      const email = this.emailRef;
      if (pass.length >= 6) {
        this.hasMinLength = true;
      } else {
        this.hasMinLength = false;
      }
      if (pass.match(/[\d]/)) {
        this.hasNumber = true;
      } else {
        this.hasNumber = false;
      }
      if (pass.match(/[A-Z]/)) {
        this.hasUpperCase = true;
      } else {
        this.hasUpperCase = false;
      }
      if (pass.match(/[a-z]/)) {
        this.hasLowerCase = true;
      } else {
        this.hasLowerCase = false;
      }
      if (
        this.hasMinLength &&
        this.hasUpperCase &&
        this.hasLowerCase &&
        this.hasNumber
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    passwordRef: function () {
      this.validate();
    },
  },
});
</script>

<template>
  <div class="container">
    <form>
      <div class="title">Log in to Home Movie Festival</div>
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
          Log In
        </button>
        <router-link to="/signup">
          <button>SignUp</button>
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
      padding: 8px;
      margin: 8px 0 16px 0;
      color: $primary-text-color;
      background: transparent;
      background: rgba($primary-color, 0.3);
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
