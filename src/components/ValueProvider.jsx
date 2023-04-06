import { createContext, useState } from 'react';

export const MyContext = createContext();

export const ValueProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(prev => prev + 1);
  };
  const decrement = () => {
    setState(prev => prev - 1);
  };

  return (
    <MyContext.Provider value={{ state, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};
