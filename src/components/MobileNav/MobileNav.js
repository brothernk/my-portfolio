import React from "react";
import Logo from "../../components/Logo/Logo";
import Modal from "../../components/Modal/Modal";

const MobileNav = () => (
  <nav className="navbar">
    <div className="mobile-nav">
      <a href="#landing-page" className="nav-item" id="home-btn">Home</a>
      <a href="#about-me-page" className="nav-item" id="about-btn">About</a>
      <a href="#portfolio-page" className="nav-item">Work</a>
      <Modal></Modal>
    </div>
  </nav>
);

export default MobileNav;