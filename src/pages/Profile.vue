<template>
  <div class="container">
    <img class="" :src="baseImageURL + user.avatar" alt="avatar" />
    <div class="name">{{ user.name }}</div>
    <div class="email">{{ user.email }}</div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const baseImageURL =
      'https://homemoviefestivalbucket.s3.us-east-2.amazonaws.com/';
    console.log(user.value.avatar);

    return {
      user,
      baseImageURL,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  .img {
    background: #fff;
  }
}
</style>
