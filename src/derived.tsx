import EventEmitter from 'eventemitter3';
import { ValueWrapper } from './types';

export function derived<Value = any, DerivedValue = any>(
  value: ValueWrapper<Value>,
  fn: (value: Value) => DerivedValue
) {
  let _v = fn(value.value);
  const emitter = new EventEmitter();
  value.emitter.on('update', (v: any) => {
    _v = fn(v);
    emitter.emit('update', _v);
  });
  return {
    get value() {
      return _v;
    },
    emitter,
  };
}
