<script setup lang="ts">
import { reactive } from 'vue';

import Tag from 'primevue/tag';
import Image from 'primevue/image';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Tooltip from 'primevue/tooltip';

const config = reactive({ ...__CONFIG__ });

function onSourceCode(e: MouseEvent): void {
  e.stopPropagation();
  window.open('https://github.com/nakamaorg/langkama-online', '_blank');
}

function clear(e: MouseEvent): void {
  e.stopPropagation();
}

function run(e: MouseEvent): void {
  e.stopPropagation();
}
</script>

<template>
  <div class="root">
    <Menubar class="nav">
      <template #start>
        <div class="nav__start">
          <img class="logo" src="/imgs/logo/logo.png" alt="Nakama Realm Logo">

          <h1 class="title">
            LangKama Online

            <span class="version">
              <Tag severity="secondary" :value="config.version"></Tag>
            </span>
          </h1>
        </div>
      </template>

      <template #end>
        <div class="nav__end">
          <Button v-tooltip.bottom="'Source Code'" icon="pi pi-github" severity="secondary" aria-label="New"
            @click="onSourceCode" />
          <Button v-tooltip.bottom="'Clear'" icon="pi pi-delete-left" severity="secondary" aria-label="New"
            @click="clear" />
          <Button v-tooltip.bottom="'Run'" icon="pi pi-play" aria-label="Interpret" @click="run" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scoped lang="scss">
.root {
  .nav {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    &__start,
    &__end {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__start {
      .logo {
        width: 40px;
        margin-right: 8px;
        border-radius: 5px;
      }

      .title {
        font-size: 18px;
        color: var(--color-primary);
        font-weight: var(--font-weight-bold);
      }
    }

    &__end {
      >* {
        margin-left: 10px;
      }
    }
  }
}
</style>