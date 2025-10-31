// src/components/Contact.jsx

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State untuk menyimpan nilai input formulir
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handler untuk memperbarui state saat input berubah
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler untuk submit formulir
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // Log data formulir ke konsol (Simulasi pengiriman)
    console.log('Data Formulir Terkirim:', formData); 
    
    // JIKA INGIN INTEGRASI NYATA: 
    // Di sini Anda akan menambahkan logika fetch/axios ke endpoint backend Anda
    
    // Opsional: Reset formulir
    setFormData({ name: '', email: '', message: '' });
    alert('Pesan Anda telah dikirim! (Simulasi)');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container"> 
        
        {/* Heading Section */}
        <h2 className="section-title">Mari Berkolaborasi! 📧</h2>
        <p className="contact-intro text-secondary">
          Tertarik dengan proyek saya, atau ingin mendiskusikan peluang? Isi formulir di bawah ini, dan saya akan segera menghubungi Anda.
        </p>
        
        {/* Formulir */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama Anda</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Anda</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Kirim Pesan
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;