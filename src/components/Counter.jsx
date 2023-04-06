import { useContext } from 'react';
import { MyContext } from './ValueProvider';

export const Counter = () => {
  const { state, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
      <p>{state}</p>
      <button
        type="button"
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
    </div>
  );
};
