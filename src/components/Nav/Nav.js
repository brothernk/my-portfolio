import React from "react";
import Logo from "../../components/Logo/Logo";
import Modal from "../../components/Modal/Modal";

const Nav = () => (
  <nav className="navbar">
    <Logo></Logo>
    <div className="main-nav">
      <a href="#landing-page" className="nav-item" id="home-btn">Home</a>
      <a href="#about-me-page" className="nav-item" id="about-btn">About</a>
      <a href="#portfolio-page" className="nav-item">Work</a>
      <Modal></Modal>
    </div>
  </nav>
);

export default Nav;