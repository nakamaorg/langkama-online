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
   * @param editor The editor instance
   */
  static registerLanguage(editor: any): void {
    editor.languages.register({
      id: 'nkm',
      extensions: ['.nkm'],
      aliases: ['LangKama']
    });

    editor.languages.setLanguageConfiguration('nkm', {
      comments: { lineComment: 'bs' },
    });

    editor.languages.setMonarchTokensProvider('nkm', {
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

    editor.editor.defineTheme('mylang-theme', {
      colors: {},
      inherit: true,
      base: this.getConfig().language,
      rules: [{ token: 'keyword', foreground: '#000ed1', fontStyle: 'bold' }],
    });
  }
}