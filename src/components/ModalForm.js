import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const MultiStepModal = ({ steps, handleClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

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

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
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
