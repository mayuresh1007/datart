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
  const closeModal = () => {
    setIsOpen(false);
  };
  const steps = [
    { title: "Step 1", content: "Content for step 1" },
    { title: "Step 2", content: "Content for step 2" },
    { title: "Step 3", content: "Content for step 3" },
  ];

  return (
    <ModalContext.Provider
      value={{ openModal, isOpen, setIsOpen, logout, steps, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };

// {
//   /* <button class="btn btn-success" data-target="#mymodel"
// data-toggle="modal"> Open SignUp </button>
// <div class="modal " id="mymodel">
// <div></div>
// </div> */
// }
