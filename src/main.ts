import './theme/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

createApp(App)
  .use(createPinia())
  .mount('#app');