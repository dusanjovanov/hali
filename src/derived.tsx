import EventEmitter from 'eventemitter3';
import { ValueWrapper } from './types';

export function derived<DerivedValue = any>(
  values: ValueWrapper<any>[],
  fn: () => DerivedValue
) {
  let _v = fn();
  const emitter = new EventEmitter();
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
