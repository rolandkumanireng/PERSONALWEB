// src/components/About.jsx (KODE LENGKAP)

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container"> 
        
        <h2 className="section-title">ABOUT ME</h2>
        
        {/* Konten dibagi menjadi 2 kolom dengan CSS Grid */}
        <div className="about-content-grid">
          
          {/* Kolom Kiri: Foto Profil & Fokus Saat Ini */}
          <div className="about-image-wrapper">
            
            {/* Tempat Anda Memasukkan Foto (Ganti src!) */}
            <div className="profile-image-container">
              <img 
                src="/images/PROFILE.jpeg" // GANTI DENGAN PATH FOTO ANDA di folder public/images/
                alt="Foto Profil Anda"
                className="profile-image"
              />
              {/* Jika Anda tidak punya foto, gunakan placeholder di bawah: */}
              {/* <span className="initials">NA</span> */}
            </div>
            
            <div className="current-focus card-container-style">
              <h4 className="focus-title">Fokus Saat Ini</h4>
              <p className="text-secondary">Mempelajari *Full-Stack Development* dengan **React** dan **Node.js**, serta mendalami *DevOps* dan *Clean Architecture*.</p>
            </div>
          </div>
          
          {/* Kolom Kanan: Biografi & Keahlian */}
          <div className="about-text-wrapper">
            <h3 className="sub-heading">Pendekatan Saya dalam Pengembangan Perangkat Lunak</h3>
            
            <p className="bio-text text-secondary">
              Saya memiliki latar belakang di **Software Quality Assurance (SQA)** dan pengujian sistem. Saya berpegangan pada prinsip *Test-Driven Development* (TDD) dan *Clean Code* untuk memastikan solusi digital yang saya buat tidak hanya berfungsi, tetapi juga aman dan mudah dipelihara.
            </p>
            
            <p className="bio-text text-secondary">
              Portofolio ini menyoroti keahlian saya dalam otomatisasi (Cypress, Selenium), perencanaan pengujian, dan pemahaman mendalam tentang *testing lifecycle* dan metodologi pengujian modern.
            </p>
            
            <h3 className="sub-heading mt-40">Keahlian Teknis</h3>
            <div className="skills-grid">
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React / Redux</span>
              <span className="skill-tag">Cypress / Selenium</span>
              <span className="skill-tag">Node.js / Express</span>
              <span className="skill-tag">PostgreSQL / MongoDB</span>
              <span className="skill-tag">Git / GitHub</span>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default About;