import './theme/main.scss';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/aura-light-green/theme.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Tooltip from 'primevue/tooltip';
import PrimeVue from 'primevue/config';
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import App from './App.vue';

createApp(App)
  .use(PrimeVue)
  .use(createPinia())
  .use(VueMonacoEditorPlugin, { paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' } })
  .directive('tooltip', Tooltip)
  .mount('#app');