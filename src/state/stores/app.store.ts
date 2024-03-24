import { defineStore } from 'pinia';
import type { TLog } from '@/core/types/log.type';
import type { LogType } from '@/core/enums/log-type.enum';
import type { TAppStore } from '@/core/types/app-store.type';



export const useAppStore = defineStore('app', {
  state: (): TAppStore => ({
    code: '',
    logs: [],
    status: null
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
     * Updates the app's status
     *
     * @param type The type of the status
     * @param message The message of the status
     */
    setStatus(type: LogType, message: string): void {
      this.status = { time: 0, type, message };
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