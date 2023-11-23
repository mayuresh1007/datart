import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../contexts/ModalContext";
import MultiStepModal from "./ModalForm";
const Navbar = () => {
  const { steps, closeModal, openModal, isOpen, setIsOpen } =
    useContext(ModalContext);

  console.log(isOpen);
  //   console.log(closeModal)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light"
                  // data-target="signup"
                  onClick={openModal}
                  // data-bs-toggle="modal"
                >
                  {" "}
                  Sign up
                </button>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && <MultiStepModal steps={steps} onHide={closeModal} handleClose={closeModal} />}
    </>
  );
};

export default Navbar;
