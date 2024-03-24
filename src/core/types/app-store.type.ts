import type { TLog } from './log.type'



/**
 * @description
 * The app store structure
 */
export type TAppStore = {

  /**
   * @description
   * The source code
   */
  code: string

  /**
   * @description
   * Logging messages
   */
  logs: Array<TLog>
}