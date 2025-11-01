// src/components/Footer.jsx (KODE LENGKAP)

import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container footer-minimal"> 
        
        {/* Kolom Kiri: Hak Cipta */}
        <div className="footer-copyright">
          <p>&copy; {currentYear} Roland Kumanireng. All rights reserved.</p>
        </div>

        {/* Kolom Kanan: Social Links/Aksi */}
        <div className="social-links-minimal">
          {/* Ganti dengan username/email Anda */}
          <a href="https://github.com/rolandkumanireng" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/rolanddphilip" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:rolandkumanireng@gmail.com">Email</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;