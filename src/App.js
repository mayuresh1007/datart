import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ModalContext, ModalProvider } from "./contexts/ModalContext";
import MultiStepModal from "./components/ModalForm";
import { useContext, useState } from "react";

function App() {
  // const {steps ,showModal, setShowModal,closeModal,openModal} = useContext(ModalContext)
  // const steps = [
  //   { title: "Step 1", content: "Content for step 1" },
  //   { title: "Step 2", content: "Content for step 2" },
  //   { title: "Step 3", content: "Content for step 3" },
  // ];

  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <ModalProvider>
        <div className="">
          <Navbar />
          <Outlet />
        </div>
      </ModalProvider>
      {/* <div>
        <button className="btn btn-primary" onClick={openModal}>
          Open Modal
        </button>
        {showModal && <MultiStepModal steps={steps} onClose={closeModal} />}
      </div> */}
    </>
  );
}

export default App;

// const App = () => {
// const steps = [
//   { title: 'Step 1', content: 'Content for step 1' },
//   { title: 'Step 2', content: 'Content for step 2' },
//   { title: 'Step 3', content: 'Content for step 3' }
// ];

// const [showModal, setShowModal] = useState(false);

// const openModal = () => {
//   setShowModal(true);
// };

// const closeModal = () => {
//   setShowModal(false);
// };

//   return (
//     <div>
//       <button className="btn btn-primary" onClick={openModal}>Open Modal</button>
//       {showModal && (
//         <MultiStepModal steps={steps} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default App;
