<template>
  <ol :class="$style.list, 'iOSPWA-stepList'">
    <StepItem :copy="props.copyShareStep">
      <template #icon>
        <IconShare />
      </template>
    </StepItem>
    <StepItem :copy="props.copyAddToHomeScreenStep">
      <template #icon>
        <IconAddToHomeScreen />
      </template>
    </StepItem>
  </ol>
</template>

<script setup lang="ts">
import StepItem from './StepItem.vue';
import IconShare from './IconShare.vue';
import IconAddToHomeScreen from './IconAddToHomeScreen.vue';

const props = defineProps<{
  copyAddToHomeScreenStep: string;
  copyShareStep: string;
}>();
</script>

<style module>
.list {
  list-style-type: none;
  list-style: inside decimal;
  margin: 0;
  padding: 20px 30px;
}
</style>
