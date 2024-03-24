import { defineStore } from 'pinia';
import type { TAppStore } from '@/core/types/app-store.type';



export const useAppStore = defineStore('app', {
  state: (): TAppStore => ({
    code: 'testo...'
  }),

  actions: {

    /**
     * @description
     * Clears the editor
     */
    clear(): void {
      this.code = '';
    },

    /**
     * @description
     * Editor run notification
     */
    onRun(): void { },
  }
});