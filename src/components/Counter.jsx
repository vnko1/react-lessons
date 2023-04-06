import { useMyContext } from './ValueProvider';

export const Counter = () => {
  const { state, increment, decrement } = useMyContext();

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
