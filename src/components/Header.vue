<template>
  <div :class="[$style.header, 'iOSPWA-header']">
    <div :class="$style.appInfo">
      <img :class="$style.appIcon" :src="props.appIconPath" alt="App Icon" />
      <div :class="$style.appTitleContainer">
        <span :class="$style.appTitle">{{ props.copyTitle }}</span>
        <span :class="$style.appSubtitle">{{ props.copySubtitle }}</span>
      </div>
    </div>
    <CloseButton @close="emit('close')" />
  </div>
</template>

<script setup lang="ts">
import CloseButton from './CloseButton.vue';

const props = defineProps<{
  appIconPath: string;
  copySubtitle: string;
  copyTitle: string;
}>();

const emit = defineEmits(['close']);  

</script>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.header * {
  margin: 0;
  padding: 0;
}

.appInfo {
  display: flex;
  flex-flow: row nowrap;
}

.appIcon {
  border-radius: 7.5px;
  height: 60px;
  min-height: 60px;
  min-width: 60px;
  overflow: hidden;
  width: 60px;
}

.appTitleContainer {
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  justify-content: flex-start;
  padding: 4px 15px;
  text-align: left;
}

.appTitle {
  color: rgba(255, 255, 255, 100%);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}

.appSubtitle {
  color: rgba(235, 235, 245, 60%);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}

@media (prefers-color-scheme: light) {
  .appTitle {
    color: #000000;
  }

  .appSubtitle {
    color: rgba(60, 60, 67, 60%);
  }
}
</style>
