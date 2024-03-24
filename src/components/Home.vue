<script setup lang="ts">
import Head from './Head.vue';
import Editor from './Editor.vue';
import Console from './Console.vue';
</script>

<template>
  <div class="root">
    <div class="head">
      <Head />
    </div>
    <div class="body">
      <div class="editor">
        <Editor />
      </div>
      <div class="console">
        <Console />
      </div>
    </div>
  </div>
</template>