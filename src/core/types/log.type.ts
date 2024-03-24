import type { LogType } from '../enums/log-type.enum';



/**
 * @description
 * Log definition
 */
export type TLog = {

  /**
   * @description
   * The time of execution
   */
  time: number

  /**
   * @description
   * The log type
   */
  type: LogType

  /**
   * @description
   * The log message
   */
  message: string
}