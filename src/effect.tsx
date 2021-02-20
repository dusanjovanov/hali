import { ValueWrapper } from './types';

export function effect<Value = any>(
  value: ValueWrapper<Value>,
  fn: (value: Value) => void
) {
  value.emitter.on('update', fn);
}
