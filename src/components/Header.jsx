
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="site-header">
      <div className="container"> 
        
        {/* Logo/Nama Anda */}
        <div className="logo">
          <a href="#home">
           Roland Philip Boli Kumanireng

          </a>
        </div>
        
        {/* Menu Navigasi */}
        <nav className="main-nav">
          <a href="#about" className="nav-link">Tentang</a>
          <a href="#projects" className="nav-link">Proyek</a>
          <a href="#contact" className="nav-link">Kontak</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;