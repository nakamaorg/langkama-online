<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { VueMonacoEditor } from '@guolao/vue-monaco-editor';

const MONACO_EDITOR_OPTIONS = {
  formatOnType: true,
  formatOnPaste: true,
  automaticLayout: true
};

const editorRef = shallowRef();
const code = ref('// some code...');
const handleMount = (editor: any) => (editorRef.value = editor);

function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>

<template>
  <vue-monaco-editor v-model:value="code" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" @mount="handleMount" />
</template>