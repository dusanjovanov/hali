import EventEmitter from 'eventemitter3';

export function value<Value = any>(v: Value) {
  let _v = v;
  const emitter = new EventEmitter();
  return {
    get value() {
      return _v;
    },
    set value(v: Value) {
      _v = v;
      emitter.emit('update', v);
    },
    emitter,
  };
}
