import theme from 'monaco-themes/themes/Dracula.json';

// Amy.json
// Dracula.json
// Nord.json


/**
 * @description
 * Helps with the editor
 */
export class EditorHelper {

  /**
   * @description
   * The editor's configuration
   */
  static getConfig() {
    return {
      language: 'nkm',
      theme: 'vs-dark',
      automaticLayout: true,
      smoothScrolling: true
    };
  }

  /**
   * @description
   * Register LangKama as a supported language
   *
   * @param monaco The editor instance
   */
  static registerLanguage(monaco: any): void {
    monaco.languages.register({
      id: 'nkm',
      extensions: ['.nkm'],
      aliases: ['LangKama']
    });

    monaco.languages.setLanguageConfiguration('nkm', {
      comments: { lineComment: 'bs' },
    });

    monaco.languages.setMonarchTokensProvider('nkm', {
      tokenizer: {
        root: [
          [/bs.*/, 'comment'],
          [/\".*?\"/, 'string'],
          [/\b\d+(\.\d+)?\b/, 'number'],
          [/\b(W|L)\b/, 'constant.language.boolean'],
          [/\b(is|sike|jk|big if true|let me cook|reda|cook until|hear me out|a sa7 hear me out)\b/, 'keyword'],
        ]
      }
    });

    monaco.editor.defineTheme('monokai', theme);
    monaco.editor.setTheme('monokai');
  }
}