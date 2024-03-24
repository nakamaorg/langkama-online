import './theme/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import App from './App.vue';

createApp(App)
  .use(createPinia())
  .use(VueMonacoEditorPlugin, { paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' } })
  .mount('#app');