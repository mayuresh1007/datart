import React, { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    // Your login logic here
    setIsOpen(true);
  };

  const logout = () => {
    // Your logout logic here
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, isOpen, setIsOpen, logout }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
