import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="container">
        <nav>
          <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fa-solid fa-circle-xmark" onClick={() => setMenuOpen(false)}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
        </nav>
        <div className="header-text">
          <p>Aspiring Techie</p>
          <h1>Hi, I'm <span>Kei</span> Ching<br /> from Singapore</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
