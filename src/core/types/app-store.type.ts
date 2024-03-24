import type { TLog } from './log.type';
import type { TNullable } from './nullable.type';
import type { ScriptName } from '../enums/script-name.enum';



/**
 * @description
 * The app store structure
 */
export type TAppStore = {

  /**
   * @description
   * Whether the code is being interpreted at the moment
   */
  interpreting: boolean

  /**
   * @description
   * Whether the code is being loaded at the moment
   */
  loading: boolean

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

  /**
   * @description
   * The selected script
   */
  selectedScript: TNullable<ScriptName>
}