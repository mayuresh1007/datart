import React, { useState, useContext, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../contexts/ModalContext";

const MultiStepModal = ({ steps, handleClose }) => {
  //   const { closeModal, openModal, isOpen, setIsOpen } = useContext(ModalContext);
  const [currentStep, setCurrentStep] = useState(0);
  const modalRef = useRef();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
    // backdrop="static" to make modal unclose untill form is submitted
    // n the MultiStepModal component, the backdrop="static" attribute is added to the Modal component. This prevents the modal from being closed when clicking outside (backdrop="static" makes the modal static and does not close it when clicking outside).
    <Modal show={true} onHide={handleClose}>
      <div ref={modalRef}>
        {/* <Modal.Header closeButton> */}
        <Modal.Header>
          <Modal.Title>{steps[currentStep].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{steps[currentStep].content}</Modal.Body>
        <Modal.Footer>
          {currentStep > 0 && (
            <Button variant="secondary" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="primary" onClick={handleClose}>
              Save changes
            </Button>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
};
export default MultiStepModal;

// // Usage example:
// const App = () => {
//   const steps = [
//     { title: 'Step 1', content: 'Content for step 1' },
//     { title: 'Step 2', content: 'Content for step 2' },
//     { title: 'Step 3', content: 'Content for step 3' }
//   ];

//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={openModal}>
//         Open Modal
//       </Button>
//       {showModal && (
//         <MultiStepModal steps={steps} handleClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default App;
