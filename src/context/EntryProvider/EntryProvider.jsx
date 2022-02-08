import { createContext, useContext, useState } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState({});
  return <EntryContext.Provider value={{ entry, setEntry }}>{children}</EntryContext.Provider>;
};

const useEntry = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useEntry must be defined within a GuestContext Provider');
  }
  return context;
};

export { EntryProvider, useEntry };
