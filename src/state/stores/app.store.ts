import { defineStore } from 'pinia';
import type { LangKamaError } from '@nakamaorg/langkama';

import type { TLog } from '@/core/types/log.type';
import type { LogType } from '@/core/enums/log-type.enum';
import type { TAppStore } from '@/core/types/app-store.type';



export const useAppStore = defineStore('app', {
  state: (): TAppStore => ({
    code: `hear me out x is bruh;
hear me out true is W;
hear me out false is L;

hear me out age is 30;
hear me out minAge is 18;
hear me out maxAge is 40;

loncina("age(" + bait(age) + ") is 18: " + bait(age = 18) + ".");
loncina("age(" + bait(age) + ") is not 18: " + bait(!(age = 18)) + ".");
loncina("age(" + bait(age) + ") is greater than minAge(" + bait(minAge) + "): " + bait(age > minAge) + ".");
loncina("age(" + bait(age) + ") is lower than maxAge(" + bait(maxAge) + "): " + bait(age < maxAge) + ".");`,
    logs: [],
    status: null,
    interpreting: false
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
    onRun(): void {
      this.interpreting = true;
    },

    /**
     * @description
     * interpretation failure notification
     *
     * @param lastSnapshot The timestamp of the last execution
     * @param error The raised error
     */
    onError(lastSnapshot: number, error: LangKamaError): void {
      this.interpreting = false;
    },

    /**
     * @description
     * interpretation success notification
     *
     * @param lastSnapshot The timestamp of the last execution
     */
    onSuccess(lastSnapshot: number): void {
      this.interpreting = false;
    }
  }
});