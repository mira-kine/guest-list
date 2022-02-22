import { createContext, useContext, useState } from 'react';

const GuestContext = createContext();

const GuestProvider = ({ children }) => {
  const [guest, setGuest] = useState('');

  const login = (email, password) => {
    const authorized = email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASSWORD;
    if (authorized) setGuest({ email });
    return authorized;
  };

  return (
    <GuestContext.Provider value={{ guest, setGuest, login }}>{children}</GuestContext.Provider>
  );
};

const useGuest = () => {
  const context = useContext(GuestContext);

  if (context === undefined) {
    throw new Error('useGuest must be defined within a GuestContext Provider');
  }
  return context;
};

export { GuestProvider, useGuest };
