import { useAppStore } from '../stores/app.store';
import { LogType } from '@/core/enums/log-type.enum';
import { EnumHelper } from '@/core/helpers/enum.helper';
import { ScriptName } from '@/core/enums/script-name.enum';
import { LangKama, LangKamaError, LangKamaEvent } from '@nakamaorg/langkama';



/**
 * @description
 * Initializes in app effects
 */
export function initAppEffect() {
  const appStore = useAppStore();
  const interpreter = new LangKama();


  appStore.$onAction(({ name, store, after, args }) => {
    after(async () => {
      switch (name) {
        case 'onRun': {
          let halt: boolean = false;
          let snapshot = performance.now();

          interpreter
            .on(LangKamaEvent.Stdout, (stdout: unknown) => {
              if (!halt) {
                const now = performance.now() - snapshot;

                store.log({ time: now, type: LogType.Out, message: stdout as string });
                snapshot = performance.now();
              }
            })
            .on(LangKamaEvent.Error, (error: unknown) => {
              if (!halt) {
                halt = true;
                const now = performance.now() - snapshot;

                store.onError(now, error as LangKamaError);
                snapshot = performance.now();
              }
            })

            .on(LangKamaEvent.Success, (result: unknown) => {
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

        case 'onLoad': {
          const fileName = EnumHelper.getName(ScriptName, store.selectedScript as ScriptName);
          const filePath = `scripts/${fileName?.toLowerCase()}.nkm`;
          const code = await fetch(filePath).then(e => e.text());

          store.setCode(code as string);
          store.setLoading(false);
          break;
        }
      }
    });
  });
}