import { useAppStore } from '../stores/app.store';
import { LangKama, LangKamaEvent } from '@nakamaorg/langkama';



/**
 * @description
 * Initializes in app effects
 */
export function initAppEffect() {
  const appStore = useAppStore();
  const interpreter = new LangKama();

  appStore.$onAction(({ name, store, after, args }) => {
    after(() => {
      switch (name) {
        case 'onRun': {
          console.log('interpreting...');
          console.log(store.code);
          interpreter
            .on(LangKamaEvent.Stdout, console.log)
            .on(LangKamaEvent.Error, console.error)
            .interpret(store.code);
        }
      }
    });
  });
}