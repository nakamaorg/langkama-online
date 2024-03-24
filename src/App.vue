<script setup lang="ts">
import { reactive } from 'vue';

const config = reactive({
  ...__CONFIG__
});

</script>

<template>
  <div class="root">
    <header>
      <img src="/imgs/logo/logo.png" alt="Nakama Realm Logo">

      <h1>LangKama Online {{ config.version }}</h1>
    </header>

    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel maxime repudiandae vitae quae. Pariatur unde
      minus recusandae ducimus beatae aperiam esse deserunt tempore rem, omnis aut saepe! Dolore, eum.
    </main>
  </div>
</template>

<style scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>