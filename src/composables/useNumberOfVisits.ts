// src/composables/useNumberOfVisits.ts
import { ref, onMounted } from 'vue';
import { useLocalStorageObject } from './useLocalStorageObject';
import { useDeviceAndVersion } from './useDeviceAndVersion';

export function useNumberOfVisits() {
  const { get, set } = useLocalStorageObject();
  const { isValidOS } = useDeviceAndVersion();
  const numberOfVisits = ref<number | undefined>(undefined);

  onMounted(() => {
    
    const visits = get("iosPwaPrompt")?.visits ?? 0;
    numberOfVisits.value = visits;
  });

  const incrementNumberOfVisits = () => {

    set("iosPwaPrompt", { isValidOS: isValidOS.value, visits: (numberOfVisits.value ?? 0) + 1 });
  };

  return { numberOfVisits, incrementNumberOfVisits };
}
