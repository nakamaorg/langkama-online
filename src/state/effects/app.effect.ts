import { useAppStore } from '../stores/app.store';
import { LogType } from '@/core/enums/log-type.enum';
import { LangKama, LangKamaError, LangKamaEvent } from '@nakamaorg/langkama';



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
          let halt: boolean = false;
          let snapshot = performance.now();

          interpreter

            // @ts-ignore
            .on(LangKamaEvent.Stdout, (stdout: string) => {
              if (!halt) {
                const now = performance.now() - snapshot;

                store.log({ time: now, type: LogType.Out, message: stdout });
                snapshot = performance.now();
              }
            })

            // @ts-ignore
            .on(LangKamaEvent.Error, (error: LangKamaError) => {
              if (!halt) {
                halt = true;
                const now = performance.now() - snapshot;

                store.onError(now, error);
                snapshot = performance.now();
              }
            })

            .on(LangKamaEvent.Success, () => {
              if (!halt) {
                const now = performance.now() - snapshot;

                store.onSuccess(now);
                snapshot = performance.now();
              }
            })
            .interpret(store.code);

          break;
        }

        case 'onSuccess': {
          const [time] = args;

          store.log({ time, type: LogType.Info, message: 'LangKama script interpreted successfully' });
          store.setStatus(LogType.Info, '[Info] LangKama script interpreted successfully');

          break;
        }

        case 'onError': {
          const [time, error] = args;

          store.log({ time: time, type: LogType.Error, message: error.toString() });
          store.setStatus(LogType.Error, `[ERROR] ${error.name}`);

          break;
        }
      }
    });
  });
}