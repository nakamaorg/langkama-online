<script setup lang="ts">
import { useAppStore } from '@/state/stores/app.store';
import { VueMonacoEditor } from '@guolao/vue-monaco-editor';

import { EditorHelper } from '@/core/helpers/editor.helper.ts';


const store = useAppStore();
const options = EditorHelper.getConfig();

/**
 * @description
 * Initializes the editor
 *
 * @param _ Ignored parameter
 * @param monaco The editor instance
 */
function onInit(_: unknown, monaco: any) {
  EditorHelper.registerLanguage(monaco);
}
</script>

<template>
  <vue-monaco-editor v-model:value="store.code" :language="options.language" :theme="options.theme" :options="options"
    @mount="onInit" />
</template>