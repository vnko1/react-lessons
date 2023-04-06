// import Box from './Box';
// import Button from './Button';
import { ValueProvider } from './ValueProvider';
import { Counter } from './Counter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Box /> */}
      {/* <Button /> */}
      <ValueProvider>
        <Counter />
      </ValueProvider>
    </div>
  );
};
