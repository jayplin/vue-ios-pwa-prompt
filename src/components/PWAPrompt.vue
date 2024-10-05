<template>
  <Container v-if="shouldShowPrompt" :isShown="isShown" :delay="delay" :copyTitle="copyTitle" :copySubtitle="copySubtitle"
    :copyDescription="copyDescription" :copyShareStep="copyShareStep" :copyAddToHomeScreenStep="copyAddToHomeScreenStep"
     :appIconPath="appIconPath" @close="emit('close')" />
</template>

<script setup lang="ts">
import { onMounted, toRef, toRefs } from 'vue';
import { useDeviceAndVersion } from '../composables/useDeviceAndVersion';
import { useNumberOfVisits } from '../composables/useNumberOfVisits';
import { useShouldShowPrompt } from '../composables/useShouldShowPrompt';
import Container from './Container.vue';

interface Props {
  appIconPath?: string;
  copyAddToHomeScreenStep?: string;
  copyDescription?: string;
  copyShareStep?: string;
  copySubtitle?: string;
  copyTitle?: string;
  delay?: number;
  promptOnVisit?: number;
  timesToShow?: number;
  isShown?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  appIconPath: `/vite.svg`,
  copyAddToHomeScreenStep: "Press 'Add to Home Screen'",
  copyDescription: "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.",
  copyShareStep: "Press the 'Share' button on the menu bar below",
  copySubtitle: String(window?.location?.href),
  copyTitle: "Add to Home Screen",
  delay: 1000,
  promptOnVisit: 2,
  timesToShow: 2,
  isShown: undefined,
});

const isShownRef = toRef(props, 'isShown');
const propsRef = toRefs(props)


const emit = defineEmits(['close']);  

const { isValidOS } = useDeviceAndVersion();
const { numberOfVisits, incrementNumberOfVisits } = useNumberOfVisits();
const { shouldShowPrompt } = useShouldShowPrompt({
  promptOnVisit: propsRef.promptOnVisit,
  timesToShow: propsRef.timesToShow,
  isShown: isShownRef,
});

onMounted(() => {
  if (isValidOS.value && numberOfVisits.value !== undefined) {
    incrementNumberOfVisits();
  }
});
</script>
