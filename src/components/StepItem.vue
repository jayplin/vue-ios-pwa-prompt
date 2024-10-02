<template>
  <li :class="[$style.stepItem, 'iOSPWA-stepItem']">
    <slot name="icon" />
    <p :class="$style.copy">{{ props.copy }}</p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  copy: string;
}>();
</script>

<style module>
.stepItem {
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 300;
  justify-content: flex-start;
  line-height: 20px;
  margin: 15px 0;
  width: 100%;
}

.stepItem:first-of-type {
  margin-top: 0;
}

.stepItem:last-of-type {
  margin-bottom: 0;
}

.copy {
  margin: 0 0 0 30px;
  text-align: left;
  color: rgba(235, 235, 245, 0.6);
}

@media (prefers-color-scheme: light) {
  .copy {
    color: rgba(60, 60, 67, 0.6);
  }
}
</style>
