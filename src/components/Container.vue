<template>
  <div :class="[$style.container, 'iOSPWA-container']">
    <Overlay :isOpen="isOpen" @close="dismissPrompt" />
    <Panel :isOpen="isOpen">
      <Header
        :appIconPath="appIconPath"
        :copySubtitle="copySubtitle"
        :copyTitle="copyTitle"
        @close="dismissPrompt"
      />
      <Divider />
      <Description :copyDescription="copyDescription" />
      <Divider />
      <StepList
        :copyShareStep="copyShareStep"
        :copyAddToHomeScreenStep="copyAddToHomeScreenStep"
      />
    </Panel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, useCssModule } from 'vue';
import Overlay from './Overlay.vue';
import Panel from './Panel.vue';
import Header from './Header.vue';
import Divider from './Divider.vue';
import Description from './Description.vue';
import StepList from './StepList.vue';

// Get the CSS Module styles
const $style = useCssModule();

const props = defineProps<{
  appIconPath: string;
  copyAddToHomeScreenStep: string;
  copyDescription: string;
  copyShareStep: string;
  copySubtitle: string;
  copyTitle: string;
  delay: number;
}>();

const isOpen = ref(!Boolean(props.delay));
let timeoutId: number | undefined;

const emit = defineEmits(['close'])

const dismissPrompt = () => {
  document.body.classList.remove($style.noScroll);
  isOpen.value = false;

  emit('close')
};

onMounted(() => {
  if (props.delay) {
    timeoutId = window.setTimeout(() => {
      (document?.activeElement as HTMLElement)?.blur();
      isOpen.value = true;
    }, props.delay);
  }

  if (isOpen.value) {
    document.body.classList.add($style.noScroll);
  }
});

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  document.body.classList.remove($style.noScroll);
});
</script>

<style module>
.container * {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-smooth: antialiased;
  -moz-osx-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;

}
.noScroll {
  overflow: hidden;
}
</style>
