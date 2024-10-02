<template>
  <div :class="[$style.description, 'iOSPWA-description']">
    {{ copyDescription }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  copyDescription: string;
}>();
</script>

<style module>
.description {
  color: rgba(235, 235, 245, 60%);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  padding: 20px 30px;
  text-align: left;
}

@media (prefers-color-scheme: light) {
  .description {
    color: rgba(60, 60, 67, 60%);
  }
}
</style>
