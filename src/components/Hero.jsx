// src/components/Hero.jsx

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    // Section Home, menggunakan padding besar
    <section id="home" className="hero-section">
      <div className="container"> 
        
        {/* Konten Hero */}
        <div className="hero-content">
          
          {/* Teks Intro (akan dianimasikan slide-up) */}
         
          
          {/* H1 - Heading Utama (Montserrat SemiBold, 56px) */}
          <h1 className="hero-heading animate-fade-slide delay-1">
            Hi, I'm Roland Philip Boli Kumanireng.
          </h1>
          
          {/* Deskripsi (Body Text 18px) */}
          <p className="hero-description animate-fade-slide delay-2">
           Welcome to my Portofolio.
          </p>
          
          {/* Call-to-Action Button */}
          <div className="hero-actions animate-fade-slide delay-3">
            <a href="#projects" className="cta-btn">
              Lihat Proyek Saya
            </a>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;