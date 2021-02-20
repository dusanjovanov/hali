import { useEffect, useState } from 'react';

export const useValue = (value: any) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const l = () => setState(!state);
    value.emitter.on('update', l);
    return () => {
      value.emitter.removeListener(l);
    };
  }, [state]);
  return value.value;
};
