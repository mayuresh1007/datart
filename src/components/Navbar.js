import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../contexts/ModalContext";
const Navbar = () => {
    const {openModal} = useContext(ModalContext)
  return (
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
            <button type="button" className="btn btn-light" onClick={()=>openModal()}> Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
