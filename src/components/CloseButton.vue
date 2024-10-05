<template>
  <button :class="[$style.closeButton, 'iOSPWA-closeButton']" @click="emit('close')" aria-label="Close">
    <IconClose />
  </button>
</template>

<script setup lang="ts">
import IconClose from './IconClose.vue';

;

const emit = defineEmits(['close']);  



</script>

<style module>
.closeButton {
  align-items: center;
  background: none;
  border-radius: 30px;
  border: 0;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
}
</style>
