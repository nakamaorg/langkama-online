<script setup lang="ts">
import Foot from './Foot.vue';
import Head from './Head.vue';
import Editor from './Editor.vue';
import Console from './Console.vue';
</script>

<template>
  <div class="root">
    <div class="head">

      <Head></Head>
    </div>

    <div class="body">
      <div class="editor">
        <Editor />
      </div>

      <div class="console">
        <Console />
      </div>
    </div>

    <div class="foot">
      <Foot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  .body {
    width: 100%;
    height: calc(100vh - 98px);

    display: flex;
    flex-direction: row;

    .editor,
    .console {
      flex: 1;
      max-width: 50%;
    }
  }
}
</style>