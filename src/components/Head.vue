<script setup lang="ts">
import { ref, reactive } from 'vue';

import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';

import { useAppStore } from '@/state/stores/app.store';
import { EnumHelper } from '@/core/helpers/enum.helper';
import { ScriptName } from '@/core/enums/script-name.enum';
import { NavigationHelper } from '@/core/helpers/navigation.helper';



const store = useAppStore();
const config = reactive({ ...__CONFIG__ });
const names = ref(EnumHelper.getNames(ScriptName).map(e => ({ label: e, value: ScriptName[e] })));

/**
 * @description
 * Checks if the editor has no content
 */
function isEmpty(): boolean {
  return store.code.trim().length === 0 || store.loading;
}

/**
 * @description
 * Triggers script loading
 *
 * @param e The event object
 */
function onChange(e: { value: ScriptName }): void {
  store.onLoad(e.value);
}

/**
 * @description
 * Navigates user to LangKama documentation
 *
 * @param e The mouse click event object
 */
function onDocumentation(e: MouseEvent): void {
  e.stopPropagation();
  NavigationHelper.open('https://github.com/nakamaorg/langkama/wiki');
}

/**
 * @description
 * Navigates user to source code
 *
 * @param e The mouse click event object
 */
function onSourceCode(e: MouseEvent): void {
  e.stopPropagation();
  NavigationHelper.open('https://github.com/nakamaorg/langkama-online');
}

/**
 * @description
 * Clears the editor and logging console
 *
 * @param e The mouse click event object
 */
function clear(e: MouseEvent): void {
  e.stopPropagation();
  store.clear();
}

/**
 * @description
 * Runs the interpreter
 *
 * @param e The mouse click event object
 */
function run(e: MouseEvent): void {
  e.stopPropagation();
  store.onRun();
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
          <Dropdown v-model:model-value="store.selectedScript" :loading="store.loading" :options="names"
            option-label="label" option-value="value" placeholder="Load Script" @change="onChange" />

          <Button v-tooltip.bottom="'Learn LangKama'" icon="pi pi-book" severity="secondary" label="ㅤDocumentation"
            aria-label="Documentation" @click="onDocumentation" />

          <Button v-tooltip.bottom="'Source Code'" icon="pi pi-github" severity="secondary" aria-label="Source Code"
            @click="onSourceCode" />

          <Button v-tooltip.bottom="'Clear'" :disabled="isEmpty()" icon="pi pi-delete-left" severity="secondary"
            aria-label="New" @click="clear" />

          <Button v-tooltip.bottom="'Run'" :disabled="isEmpty()" :loading="store.interpreting" icon="pi pi-play"
            aria-label="Interpret" class="run" @click="run" />
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
      .run {
        border-color: var(--color-primary);
        background-color: var(--color-primary);

        &:hover {
          background-color: hsl(var(--color-primary-hsl), 30%);
        }
      }

      >* {
        margin-left: 10px;
      }
    }
  }
}
</style>