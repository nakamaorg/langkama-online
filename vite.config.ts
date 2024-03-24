import { fileURLToPath, URL } from 'node:url';

import pkg from './package.json';
import pwa from './src/core/consts/pwa.const';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
  base: `/${pkg.name}`,
  plugins: [
    vue(),
    VitePWA(pwa as any)
  ],
  define: {
    __CONFIG__: {
      version: pkg.version
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
