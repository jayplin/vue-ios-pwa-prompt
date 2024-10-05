<template>
  <div
    :class="[$style.panel, { [$style.visible]: props.isOpen }, 'iOSPWA-panel']"
    aria-describedby="pwa-prompt-description"
    aria-labelledby="pwa-prompt-title"
    role="dialog"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();
</script>

<style module>
.panel {
  background-color: #222222;
  border-radius: 10px;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: fixed;
  transform: translateY(calc(100% + 10px));
  transition: transform 0.4s cubic-bezier(0.4, 0.24, 0.3, 1);
  width: 100%;
  box-shadow: 0 0px 100px rgba(0, 0, 0, 0.23), 0 0px 100px rgba(0, 0, 0, 0.23);
  z-index: 999999;
  margin: 0 8px 10px;
  width: calc(100vw - 16px);
}

.visible {
  display: block;
  transform: translateY(0);
}

@media (prefers-color-scheme: light) {
  .panel {
    background-color: #f6f6f6;
  }
}
</style>
