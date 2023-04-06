import { createContext, useState, useContext } from 'react';

const myContext = createContext();

export const useMyContext = () => useContext(myContext);

export const ValueProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(prev => prev + 1);
  };
  const decrement = () => {
    setState(prev => prev - 1);
  };

  return (
    <myContext.Provider value={{ state, increment, decrement }}>
      {children}
    </myContext.Provider>
  );
};
