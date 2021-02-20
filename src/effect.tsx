import { ValueWrapper } from './types';

export function effect(values: ValueWrapper<any>[], fn: () => void) {
  values.forEach(v => {
    v.emitter.on('update', fn);
  });
}
