<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'loading',
});
</script>

<template>
  <div class="loading">
    <span class="dot" id="dot1"></span>
    <span class="dot" id="dot2"></span>
    <span class="dot" id="dot3"></span>
    <span class="dot" id="dot4"></span>
    <span class="dot" id="dot5"></span>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.loading {
  display: flex;
  .dot {
    width: 20px;
    height: 20px;
    background: $secondary-color;
    border-radius: 50%;
    margin: 4px;
  }
  @for $i from 0 through 5 {
    .dot:nth-child(#{$i}) {
      animation: bounce 2s infinite linear;
      animation-delay: calc(#{$i} * 0.25s);
    }
  }
}

@keyframes bounce {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translate(50px);
  }
  100% {
    transform: translateX(-50px);
  }
}
</style>
