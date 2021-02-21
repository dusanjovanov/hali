import { useEffect, useState } from 'react';

export const useValue = (value: any) => {
  const { 1: setState } = useState(0);
  useEffect(() => {
    const l = () => setState(Date.now());
    value.emitter.on('update', l);
    return () => {
      value.emitter.off('update', l);
    };
  }, []);
  return value.value;
};
