<template>
  <button :class="[$style.closeButton, 'iOSPWA-closeButton']" @click="handleClose" aria-label="Close">
    <IconClose />
  </button>
</template>

<script setup lang="ts">
import IconClose from './IconClose.vue';

const props = defineProps<{
  onClose: (evt: MouseEvent) => void;
}>();

const handleClose = (event: MouseEvent) => {
  props.onClose(event);
};
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
