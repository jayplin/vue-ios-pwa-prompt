<template>
  <div :class="[$style.divider, 'iOSPWA-divider']"></div>
</template>

<style module>
.divider {
  background-color: rgba(84, 84, 88, 65%);
  height: 1px;
  transform: scaleY(0.2);
  width: 100%;
}

@media (prefers-color-scheme: light) {
  .divider {
    background-color: rgba(60, 60, 67, 36%);
  }
}
</style>
