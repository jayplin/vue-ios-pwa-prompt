// src/composables/useShouldShowPrompt.ts
import { ref, watch } from 'vue';
import { useNumberOfVisits } from './useNumberOfVisits';
import { useDeviceAndVersion } from './useDeviceAndVersion';

interface UseShouldShowPromptProps {
  promptOnVisit: number;
  timesToShow: number;
  isShown?: boolean;
}

export function useShouldShowPrompt({ promptOnVisit, timesToShow, isShown }: UseShouldShowPromptProps) {
  const shouldShowPrompt = ref<boolean | undefined>(undefined);
  const { isValidOS, isStandalone } = useDeviceAndVersion();
  const { numberOfVisits } = useNumberOfVisits();

  watch(
    () => [isValidOS.value, numberOfVisits.value, isShown, isStandalone.value],
    () => {
      if (isValidOS.value !== undefined && numberOfVisits.value !== undefined && isStandalone.value === false) {
        const aboveMinVisits = numberOfVisits.value + 1 >= promptOnVisit;
        const belowMaxVisits = numberOfVisits.value + 1 < promptOnVisit + timesToShow;

        const shouldTrigger = isValidOS.value && aboveMinVisits && belowMaxVisits;
        console.log({ aboveMinVisits, belowMaxVisits, shouldTrigger, isValidOS: isValidOS.value });

        shouldShowPrompt.value =
          (isShown === undefined && shouldTrigger) ||
          (isShown !== undefined && isShown);
          console.log(isShown);
          
        console.log(shouldShowPrompt.value);


      }
    },
    { immediate: true }
  );

  return { shouldShowPrompt };
}
