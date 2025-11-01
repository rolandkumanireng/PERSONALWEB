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
                src="/PERSONAL-WEB/images/PROFILE.jpeg" // Path yang disesuaikan dengan base URL deployment
                alt="Foto Profil Anda"
                className="profile-image"
              />
              {/* Jika Anda tidak punya foto, gunakan placeholder di bawah: */}
              {/* <span className="initials">NA</span> */}
            </div>
            
            <div className="current-focus card-container-style">
             
              <p className="text-secondary">"Living Young and Wild and Free"</p>
            </div>
          </div>
          
          {/* Kolom Kanan: Biografi & Keahlian */}
          <div className="about-text-wrapper">
            {/* <h3 className="sub-heading">Pendekatan Saya dalam Pengembangan Perangkat Lunak</h3> */}
            
            <p className="bio-text text-secondary">
            I made this website using React
            </p>
            
           
            
            <h3 className="sub-heading mt-40">Keahlian Teknis</h3>
            <div className="skills-grid">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Cypress / Selenium</span>
       
             
              <span className="skill-tag">Git / GitHub</span>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default About;