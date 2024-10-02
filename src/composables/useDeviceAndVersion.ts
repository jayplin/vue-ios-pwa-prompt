// src/composables/useDeviceAndVersion.ts
import { ref, onMounted } from 'vue';

export function useDeviceAndVersion() {
  const platform = ref<string | null | undefined>(undefined);
  const version = ref<string | null | undefined>(undefined);
  const isStandalone = ref<boolean | undefined>(undefined);
  const isValidOS = ref<boolean | undefined>(undefined);

  onMounted(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platformRegex = /(iphone|ipad|ipod|macintosh)/g;
    const versionRegex = /os (\d+)/g;

    const platformMatch = platformRegex.exec(userAgent);
    const detectedPlatform = platformMatch ? platformMatch[1] : null;
    const isIpad =
      detectedPlatform === 'macintosh' && window.navigator.maxTouchPoints > 1;
    const versionMatch = versionRegex.exec(userAgent);
    const detectedVersion = versionMatch ? versionMatch[1] : null;
    const standalone =
      'standalone' in window.navigator && !!(window.navigator as any).standalone;

    isStandalone.value = standalone;
    isValidOS.value = isIpad || (!!detectedPlatform && detectedPlatform !== 'macintosh');
    platform.value = isIpad ? 'ipad' : detectedPlatform ?? null;
    version.value = !!detectedPlatform || isIpad ? detectedVersion ?? null : null;
  });

  return { platform, version, isStandalone, isValidOS };
}
