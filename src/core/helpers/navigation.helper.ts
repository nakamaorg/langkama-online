/**
 * @description
 * Helps with navigation.
 */
export class NavigationHelper {

  /**
   * @description
   * Opens a window on input url
   *
   * @param url The URL to navigate to
   */
  static open(url: string): void {
    window.open(url, '_blank');
  }
}