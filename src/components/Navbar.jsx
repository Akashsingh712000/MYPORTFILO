import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar brutal-box bg-yellow">
      <div className="logo">
        <span className="logo-box bg-blue">A</span>
        <span className="logo-box bg-pink">S</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#projects">Projects</a>
      </nav>
      <div className="nav-actions">
        <a href="#contact" className="brutal-btn bg-blue">Get in Touch!</a>
      </div>
    </header>
  );
};

export default Navbar;
