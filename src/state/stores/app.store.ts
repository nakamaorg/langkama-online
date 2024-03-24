import { defineStore } from 'pinia';
import type { LangKamaError } from '@nakamaorg/langkama';

import type { TLog } from '@/core/types/log.type';
import type { LogType } from '@/core/enums/log-type.enum';
import type { TNullable } from '@/core/types/nullable.type';
import type { TAppStore } from '@/core/types/app-store.type';
import type { ScriptName } from '@/core/enums/script-name.enum';



export const useAppStore = defineStore('app', {
  state: (): TAppStore => ({
    code: ``,
    logs: [],
    status: null,
    loading: false,
    interpreting: false,
    selectedScript: null
  }),

  actions: {

    /**
     * @description
     * Updates the source code
     *
     * @param code The code to set
     */
    setCode(code: string): void {
      this.code = code;
    },

    /**
     * @description
     * Updates the logs
     *
     * @param logs The code to set
     */
    setLogs(logs: Array<TLog>): void {
      this.logs = logs;
    },

    /**
     * @description
     * Updates the loading state
     *
     * @param loading The state ot update to
     */
    setLoading(loading: boolean): void {
      this.loading = loading;
    },

    /**
     * @description
     * Updates the interpreting state
     *
     * @param interpreting The state ot update to
     */
    setInterpreting(interpreting: boolean): void {
      this.interpreting = interpreting;
    },

    /**
     * @description
     * Updates the selectedScript state
     *
     * @param selectedScript The state ot update to
     */
    setSelectedScript(selectedScript: TNullable<ScriptName>): void {
      this.selectedScript = selectedScript;
    },

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
      this.setCode('');
      this.setLogs([]);
      this.setSelectedScript(null);
    },

    /**
     * @description
     * Script load notification
     *
     * @param scriptName The name of the script to load
     */
    onLoad(scriptName: TNullable<ScriptName>): void {
      this.clear();
      this.setLoading(true);
      this.setSelectedScript(scriptName);
    },

    /**
     * @description
     * Editor run notification
     */
    onRun(): void {
      this.setInterpreting(true);
    },

    /**
     * @description
     * interpretation failure notification
     *
     * @param lastSnapshot The timestamp of the last execution
     * @param error The raised error
     */
    onError(lastSnapshot: number, error: LangKamaError): void {
      this.setInterpreting(false);
    },

    /**
     * @description
     * interpretation success notification
     *
     * @param lastSnapshot The timestamp of the last execution
     */
    onSuccess(lastSnapshot: number): void {
      this.setInterpreting(false);
    }
  }
});