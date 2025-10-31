// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container"> 
        
        {/* Konten Utama Footer (4 Kolom) */}
        <div className="footer-content-grid">
          
          {/* Kolom 1: Identitas (KSR PMI UNHAS) */}
          <div className="footer-col footer-identity">
            {/* Placeholder untuk Logo/Nama */}
            <div className="brand-info">
              {/* Anda bisa ganti ini dengan <img src="logo.png" alt="Logo KSR PMI" /> */}
              <p className="brand-name">🩸 KSR PMI UNHAS</p>
              <p className="brand-location text-secondary">Makassar</p>
            </div>
            <p className="project-description">
              Sistem Informasi Donor Darah KSR PMI Universitas Hasanuddin
            </p>
          </div>

          {/* Kolom 2: Menu */}
          <div className="footer-col">
            <h4 className="col-title">Menu</h4>
            <ul>
              <li><a href="#home">Beranda</a></li>
              <li><a href="#activities">Kegiatan Donor</a></li>
              <li><a href="#about">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div className="footer-col">
            <h4 className="col-title">Layanan</h4>
            <ul>
              <li><a href="#eligibility">Cek Kelayakan Donor</a></li>
              <li><a href="#request-form">Formulir Permintaan Donor</a></li>
              <li><a href="#info-utd">Informasi UTD/PMI</a></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div className="footer-col footer-contact">
            <h4 className="col-title">Kontak</h4>
            <p>Email: <a href="mailto:ksr@pmi.unhas.ac.id">ksr@pmi.unhas.ac.id</a></p>
            <p>Telp: (0411) 586010</p>
            <p>Alamat: Jl. Perintis Kemerdekaan KM.10, Makassar</p>
          </div>
        </div>

        {/* Hak Cipta Bawah */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} KSR PMI UNHAS Makassar. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;