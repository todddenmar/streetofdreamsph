'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext({ theme: 'dark' });

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({ theme: 'dark' });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
