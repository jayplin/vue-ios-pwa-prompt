<template>
  <div :class="[$style.overlay, { [$style.visible]: props.isOpen }, 'iOSPWA-overlay']" aria-label="Close" role="button"
    @click="emit('close')"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['close']);  
</script>

<style module>
.overlay {
  background-color: rgba(10, 10, 10, 0.5);
  height: 100%;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  touch-action: none;
  transition: opacity 0.2s ease-in;
  width: 100%;
}

.visible {
  display: block;
  opacity: 1;
  pointer-events: all;
  touch-action: auto;
  z-index: 999999;
}

@media (prefers-color-scheme: light) {
  .overlay {
    background-color: rgba(10, 10, 10, 0.2);
  }
}
</style>
