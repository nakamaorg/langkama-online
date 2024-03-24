<script setup lang="ts">
import { useAppStore } from '@/state/stores/app.store';
import { VueMonacoEditor } from '@guolao/vue-monaco-editor';

const store = useAppStore();

const options = {
  language: 'nkm',
  automaticLayout: true,
  smoothScrolling: true
};

function ready(_: unknown, monaco: any) {
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
  })

  // monaco.editor.defineTheme('langkama', {
  //   base: 'vs-dark',
  //   inherit: true,
  //   rules: [{ token: 'keyword', foreground: '#000ed1', fontStyle: 'bold' }],
  //   colors: {}
  // });
}
</script>

<template>
  <vue-monaco-editor v-model:value="store.code" language="nkm" theme="vs-dark" :options="options" @mount="ready" />
</template>