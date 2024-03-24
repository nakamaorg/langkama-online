import { defineStore } from 'pinia';
import type { TLog } from './../../core/types/log.type';
import type { TAppStore } from '@/core/types/app-store.type';



export const useAppStore = defineStore('app', {
  state: (): TAppStore => ({
    code: `
let me cook factorial(n) {
  hear me out val is 0;

  big if true (n = 0) {
    val is 1;
  } sike {
    val is n * factorial(n - 1);
  }

  reda val;
}

a sa7 hear me out num is 10;
a sa7 hear me out result is factorial(num);
loncina(bait(num) + "! =", result); bs Outputs: 120

reda result;
    `,
    logs: []
  }),

  actions: {

    /**
     * @description
     * Logs a message
     *
     * @param logMsg The log
     */
    log(logMsg: TLog): void {
      this.logs.push(logMsg);
    },

    /**
     * @description
     * Clears the editor
     */
    clear(): void {
      this.code = '';
      this.logs = [];
    },

    /**
     * @description
     * Editor run notification
     */
    onRun(): void { },
  }
});