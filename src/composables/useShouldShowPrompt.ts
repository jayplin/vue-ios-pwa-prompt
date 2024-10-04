import { computed, Ref } from 'vue';
import { useNumberOfVisits } from './useNumberOfVisits';
import { useDeviceAndVersion } from './useDeviceAndVersion';

interface UseShouldShowPromptProps {
  promptOnVisit: Ref<number>;
  timesToShow: Ref<number>;
  isShown?: Ref<boolean | undefined>;
}

export function useShouldShowPrompt({ promptOnVisit, timesToShow, isShown }: UseShouldShowPromptProps) {
  const { isValidOS, isStandalone } = useDeviceAndVersion();
  const { numberOfVisits } = useNumberOfVisits();

  // Single computed property to handle both manual and automatic prompt logic
  const shouldShowPrompt = computed(() => {
    // Manual override with isShown prop
    if (isShown?.value !== undefined) {
      return isShown.value;
    }

    // Automatic logic based on the number of visits and OS validation
    if (
      isValidOS.value !== undefined &&
      numberOfVisits.value !== undefined &&
      isStandalone.value === false
    ) {
      const aboveMinVisits = numberOfVisits.value + 1 >= promptOnVisit.value;
      const belowMaxVisits = numberOfVisits.value + 1 < promptOnVisit.value + timesToShow.value;

      return isValidOS.value && aboveMinVisits && belowMaxVisits;
    }

    return false;
  });

  return { shouldShowPrompt };
}
