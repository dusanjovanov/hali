import { Emitter } from 'mitt';

export type ValueWrapper<Value = any> = {
  value: Value;
  emitter: Emitter;
};
