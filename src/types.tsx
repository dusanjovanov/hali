import EventEmitter from 'eventemitter3';

export type ValueWrapper<Value = any> = {
  value: Value;
  emitter: EventEmitter<string | symbol, any>;
};
