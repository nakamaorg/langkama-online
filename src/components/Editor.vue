<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { VueMonacoEditor } from '@guolao/vue-monaco-editor';
import { useAppStore } from '@/state/stores/app.store';

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true
};

const store = useAppStore();
const editorRef = shallowRef();
const handleMount = (editor: any) => (editorRef.value = editor);

function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>

<template>
  <vue-monaco-editor v-model:value="store.code" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" @mount="handleMount" />
</template>