// src/components/ProjectCard.jsx (KODE LENGKAP - PERBAIKAN KLIK FINAL)

import React from 'react';
import { useInView } from 'react-intersection-observer'; 
import { useNavigate } from 'react-router-dom'; 
import './ProjectCard.css';

// Menerima isDragHappenedRef sebagai prop
const ProjectCard = ({ title, description, tags, projectId, delay, isDragHappenedRef }) => { 
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });
  
  const navigate = useNavigate(); 
  const cardClasses = `project-card ${inView ? 'is-visible' : 'is-hidden'}`;

  // Handler khusus untuk tombol "Lihat Proyek" - PRIORITAS TINGGI
  const handleViewProjectClick = (e) => {
      e.stopPropagation(); // Mencegah event bubbling ke parent
      e.preventDefault(); // Mencegah default link behavior
      
      // Langsung navigasi tanpa mengecek drag status
      navigate(`/view/${projectId}`);
  };

  // Handler untuk area kartu (optional - bisa dihapus jika hanya tombol yang perlu diklik)
  const handleCardClick = (e) => {
      // Hanya jalankan jika yang diklik bukan tombol "Lihat Proyek"
      if (e.target.closest('.card-link-text')) {
          return; // Biarkan handleViewProjectClick yang menangani
      }
      
      // Cek apakah ada drag yang terjadi
      if (isDragHappenedRef && isDragHappenedRef.current) {
          e.preventDefault();
          isDragHappenedRef.current = false;
          return;
      }
      
      // Navigasi jika tidak ada drag
      navigate(`/view/${projectId}`);
  };

  return (
    <div 
      ref={ref} 
      onClick={handleCardClick}
      className={cardClasses}
      style={{ transitionDelay: `${delay}ms` }} 
    >
      <div className="card-content">
        
        <h3 className="card-title">{title}</h3> 
        
        <p className="card-description">{description}</p>
        
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        {/* Tombol "Lihat Proyek" dengan handler yang diprioritaskan */}
        <button
            onClick={handleViewProjectClick}
            className="card-link-text"
            type="button"
        >
            Lihat Proyek &rarr;
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;