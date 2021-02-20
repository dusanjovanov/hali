import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { derived, effect, useValue, value } from '../.';

const countValue = value(1);

effect([countValue], () => console.log(countValue.value));

const doubleCountValue = derived([countValue], () => countValue.value * 2);

const doubleDoubleCountValue = derived(
  [doubleCountValue],
  () => doubleCountValue.value * 2
);

const plus = () => {
  countValue.value++;
};

const minus = () => {
  countValue.value--;
};

const App = () => {
  // React.useEffect(() => {
  //   setInterval(() => {
  //     plus();
  //   }, 200);
  // }, []);

  return (
    <div>
      <Counter />
      <Counter2 />
    </div>
  );
};

const Counter = () => {
  const count = useValue(countValue);
  return (
    <div>
      <button onClick={minus}>-</button>
      {count} <button onClick={plus}>+</button>
    </div>
  );
};

const Counter2 = () => {
  const count = useValue(countValue);
  const doubleCount = useValue(doubleCountValue);
  const doubleDoubleCount = useValue(doubleDoubleCountValue);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Double count: {doubleCount}</div>
      <div>Double double count: {doubleDoubleCount}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
