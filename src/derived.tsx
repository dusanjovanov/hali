import mitt from 'mitt';
import { ValueWrapper } from './types';

export function derived<DerivedValue = any>(
  values: ValueWrapper<any>[],
  fn: () => DerivedValue
) {
  let _v = fn();
  const emitter = mitt();
  values.forEach(v => {
    v.emitter.on('update', () => {
      _v = fn();
      emitter.emit('update', _v);
    });
  });
  return {
    get value() {
      return _v;
    },
    emitter,
  };
}
