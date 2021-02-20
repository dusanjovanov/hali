# Hali

Tiny global state management for React

[![npm](https://badge.fury.io/js/hali.svg)](https://www.npmjs.com/package/hali)

### Install

```bash
npm install hali --save
```

### Usage

```tsx
import {value, derived, effect, useValue} from 'hali';

const countValue = value(1);

effect([countValue], () => console.log(countValue.value));

const doubleCountValue = derived([countValue], () => countValue.value * 2);

const plus = () => {
  countValue.value++;
};

const minus = () => {
  countValue.value--;
};

const App = () => {
  const count = useValue(countValue)
  const doubleCount = useValue(doubleCountValue)
  return (
    <div>
      <div>
      <button onClick={plus}>+</button>
      Count: {count}
      <button onClick={minus}>+</button>
      </div>
      Double count: {doubleCount}
    </div>
  );
};

```
