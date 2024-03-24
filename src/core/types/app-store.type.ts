import type { TLog } from './log.type';
import type { TNullable } from './nullable.type';



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

  /**
   * @description
   * The status of the app
   */
  status: TNullable<TLog>
}