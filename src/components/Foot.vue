<script setup lang="ts">
import { LogType } from '@/core/enums/log-type.enum';
import { useAppStore } from '@/state/stores/app.store';
import { EnumHelper } from '@/core/helpers/enum.helper';

import Button from 'primevue/button';
import { version } from '@nakamaorg/langkama';
import type { TUnsafe } from '@/core/types/unsafe.type';
import { NavigationHelper } from '@/core/helpers/navigation.helper';



const store = useAppStore();

/**
 * @description
 * Navigates the user to KangKama source code
 *
 * @param e The mouse click event object
 */
function onLangKama(e: MouseEvent) {
  e.stopPropagation();
  NavigationHelper.open('https://github.com/nakamaorg/langkama');
}

/**
 * @description
 * Gets the appropriate class name for a given log type
 *
 * @param type The type of the log
 */
function getClass(type: TUnsafe<LogType>): string {
  const name = EnumHelper.getName(LogType, type as any);
  return `left--${name?.toLowerCase()}`;
}
</script>

<template>
  <div class="foot">
    <div class="left" :class="[getClass(store.status?.type)]">
      {{ store.status?.message }}
    </div>

    <div class="right">
      <Button icon="pi pi-github" severity="secondary" :label="'ㅤLangKama v' + version" @click="onLangKama" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.foot {
  padding: 4px;
  font-size: 12px;
  background-color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .right {
    .p-button {
      padding: 5px;
      font-size: 12px;
    }
  }

  .left {
    font-weight: var(--font-weight-bold);


    &--error {
      color: #d3453b;
    }

    &--info {
      color: #0caf5d;
    }
  }
}
</style>