import mitt from 'mitt';

export function value<Value = any>(v: Value) {
  let _v = v;
  const emitter = mitt();
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
