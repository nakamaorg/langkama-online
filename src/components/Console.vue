<script setup lang="ts">
import { LogType } from '@/core/enums/log-type.enum';
import { useAppStore } from '@/state/stores/app.store';
import { EnumHelper } from '@/core/helpers/enum.helper';



const store = useAppStore();

/**
 * @description
 * Formats the execusion time
 *
 * @param time The execusion time in milliseconds
 */
function getTime(time: number): string {
  return `${(time).toFixed(2)}ms`;
}

/**
 * @description
 * Gets the appropriate class name for a given log type
 *
 * @param type The type of the log
 */
function getClass(type: LogType): string {
  const name = EnumHelper.getName(LogType, type);
  return `log--${name?.toLowerCase()}`;
}
</script>

<template>
  <div class="root">
    <ul class="logs">
      <li v-for="log in store.logs" class="log" :class="[getClass(log.type)]">
        <span class="log__time">[{{ getTime(log.time) }}]</span>

        <pre v-if="log.type === LogType.Error" class="log__message">{{ log.message }}</pre>
        <span v-else class="log__message">{{ log.message }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.root {
  padding: 10px;
  overflow: auto;

  .logs {
    margin: 0;
    padding: 0;
    list-style-type: none;

    .log {
      &__time {
        font-size: 12px;
        margin-right: 5px;
        color: #b89f30;
      }

      &__message {
        font-size: 14px;
        font-family: monospace;
      }

      &--error {
        .log__message {
          color: #b83030;
        }
      }

      &--info {
        .log__message {
          color: #b89f30;
        }
      }
    }
  }
}
</style>