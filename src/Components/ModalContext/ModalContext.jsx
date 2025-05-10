// ModalContext.js (or ModalContext.jsx)
import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isLoginOpen, setIsLoginOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);  // Make sure this is exported
