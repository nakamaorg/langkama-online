/**
 * @description
 * Helps with console management
 */
export class ConsoleHelper {

  /**
   * @description
   * Scrolls to the bottom of the console
   */
  static scroll(): void {
    const consoleElement = document.getElementById('console-element');

    if (consoleElement) {
      setTimeout(() => consoleElement.scrollTo({ behavior: 'smooth', top: consoleElement.scrollHeight }));
    }
  }
}