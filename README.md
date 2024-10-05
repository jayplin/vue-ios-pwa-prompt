
# Vue3 port of react-ios-pwa-prompt

[![npm version](http://img.shields.io/npm/v/vue-ios-pwa-prompt.svg?style=flat)](https://npmjs.org/package/vue-ios-pwa-prompt "View this project on npm") 

> Vue Port from 

A Vue 3 component that provides a customizable Progressive Web App (PWA) prompt telling the user to 'Add to Home Screen'. The prompt behavior is baked into Android devices, yet iOS is still lagging behind. This component aims to provide a simple way to provide this functionality on iOS for websites that are PWA-ready. The prompt styles closely match iOS designs for both light and dark UI modes to appear native to the user.



<hr>

<img src="https://user-images.githubusercontent.com/11626619/65389000-18352d00-dd49-11e9-82c8-6fac25a494c8.gif" width="33%">

<hr>

## Features

- 🛠 Fully configurable — set how many times you want to see it, and after how many page visits.
- 📃 Customizable — modify the content of your prompt message through props, including offline and full-screen availability.
- ⚡️ Efficient — very little overhead for non-iOS devices, and it only does the work needed for each page load.
- 🌕 Light & dark mode available, depending on the user's settings.

## Usage

### 1. Install the `vue-ios-pwa-prompt` package

Install it using `npm` or `yarn`:

```bash
npm install vue-ios-pwa-prompt
```

or

```bash
yarn add vue-ios-pwa-prompt
```

### 2. Import and use the component

In your Vue 3 project, import and use the `PWAPrompt` component:

```vue
<script setup lang="ts">
import {PWAPrompt} from 'vue-ios-pwa-prompt'
</script>

<template>
  <PWAPrompt />
</template>
```

### 3. Add optional props for configuration

You can configure the `PWAPrompt` component by passing in various props. Here is a list of the available props:

| Prop                    | Description                                            | Default Value                                                                                             |
| ----------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `timesToShow`            | Number of consecutive visits to show the prompt        | 2                                                                                                         |
| `promptOnVisit`          | On which visit should the first prompt be shown?       | 2                                                                                                         |
| `delay`                  | Delay in milliseconds before showing the prompt        | 1000                                                                                                      |
| `copyTitle`              | The title of the prompt                                | "Add to Home Screen"                                                                                       |
| `copySubtitle`           | The subtitle of the prompt                             | `String(window.location.href)`                                                                             |
| `copyDescription`        | The description of the prompt                          | "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline."|
| `copyShareStep`          | The Share button copy                                  | "Press the 'Share' button on the menu bar below"                                                          |
| `copyAddToHomescreenStep`| The Add to Homescreen button copy                      | "Press 'Add to Home Screen'"                                                                              |
| `appIconPath`            | Path to an icon or favicon to be shown as the app icon | `https://s2.googleusercontent.com/s2/favicons?domain=${window.location.origin}`                            |
| `isShown`                | Set to `true` to manually show the prompt              | `undefined`                                                                                               |
| `@close`                | event when the prompt is dismissed         |                                                                                          |


Example usage with custom props:

```vue
<template>
  <PWAPrompt :promptOnVisit="1" :timesToShow="1" />
</template>
```

### 4. Create your own trigger conditions

You can easily set your own conditions for triggering the prompt. For example, to display the prompt 20% of the time:

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {PWAPrompt} from 'vue-ios-pwa-prompt';

const shouldShowPWAPrompt = ref(false);

onMounted(() => {
  // 20% chance of showing the prompt
  shouldShowPWAPrompt.value = Math.random() < 0.2;
});
</script>

<template>
  <PWAPrompt :isShown="shouldShowPWAPrompt" @close="shouldShowPWAPrompt = false" />
</template>
```


### License

MIT License
```

