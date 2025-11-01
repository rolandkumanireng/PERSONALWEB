// src/components/Projects.jsx (KODE LENGKAP - PERBAIKAN FINAL 404)

import React, { useRef, useState } from 'react'; 
import ProjectCard from './ProjectCard';
import './Projects.css';

// --- DATA PROYEK DIURUTKAN DARI 1 HINGGA 8 ---
const projectData = [
  {
    title: "Strategi & Klasifikasi Software Testing",
    description: "Mengulas konsep dasar, tujuan, siklus hidup, serta klasifikasi pengujian (Unit, System, Fungsional, Black/White Box).",
    tags: ["Testing Strategy", "STLC", "Black Box", "White Box"],
    link: "/PERSONAL-WEB/Kelompok 1-compressed.pdf"
  },
  {
    title: "Penyusunan Testing Plan",
    description: "Dokumen panduan yang menjelaskan strategi pengujian, ruang lingkup, kriteria lulus/gagal (IEEE 829), risiko, dan jadwal pelaksanaan.",
    tags: ["Testing Plan", "QA Document", "Strategy", "IEEE 829"],
    link: "/PERSONAL-WEB/Kelompok 3_compressed.pdf"
  },
  {
    title: "Test Scenario, Test Case & Bug Report",
    description: "Panduan membuat skenario pengujian, langkah detail pengujian, hingga format standar laporan kesalahan (Bug Report) termasuk Severity dan Priority.",
    tags: ["Test Case", "Bug Report", "Test Scenario", "SQA"],
    link: "/PERSONAL-WEB/Kelompok 4_compressed.pdf"
  },
  {
    title: "Prinsip Dasar Unit Testing",
    description: "Mempelajari pengujian unit terkecil dalam kode, pentingnya, dan pola penulisan tes menggunakan AAA (Arrange, Act, Assert) dan framework (Jest, JUnit, Pytest).",
    tags: ["Unit Testing", "AAA Pattern", "Jest", "TDD"],
    link: "/PERSONAL-WEB/Kelompok 5_compressed.pdf"
  },
  {
    title: "Pengujian API (API Testing)",
    description: "Menganalisis anatomi Request & Response API dan cara melakukan pengujian API menggunakan tools seperti Postman dan SOAPUI.",
    tags: ["API Testing", "Postman", "SOAPUI", "Backend"],
    link: "/PERSONAL-WEB/Kelompok 6_compressed.pdf"
  },
  {
    title: "Pengantar Selenium WebDriver",
    description: "Presentasi mendalam mengenai framework open-source Selenium WebDriver untuk automasi pengujian fungsional aplikasi web.",
    tags: ["Selenium", "WebDriver", "Automation", "Browser Testing"],
    link: "/PERSONAL-WEB/Kelompok 7.pdf"
  },
  {
    title: "End-to-End Testing dengan Cypress",
    description: "Pendekatan modern dalam End-to-End testing untuk aplikasi web (React/Vue), mencakup arsitektur, setup, perintah dasar, dan fitur seperti Time Travel.",
    tags: ["Cypress", "E2E Testing", "JavaScript", "Time Travel"],
    link: "/PERSONAL-WEB/Kelompok 8_compressed.pdf"
  },
  {
    title: "Aspek UI/UX Testing",
    description: "Membahas perbedaan pengujian UI (tampilan visual) dan UX (pengalaman pengguna), mencakup Responsivitas, Kompatibilitas, dan Aksesibilitas.",
    tags: ["UI/UX", "Usability", "A/B Testing", "Accessibility"],
    link: "/PERSONAL-WEB/Kelompok 2.pdf"
  },
];

const Projects = () => {
  const sliderRef = useRef(null); 
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isDragHappenedRef = useRef(false);

  // --- HANDLER DRAG-TO-SCROLL SAMA SEPERTI SEBELUMNYA ---
  const handleMouseDown = (e) => {
    if (e.button !== 0 || !sliderRef.current) return; 
    isDragHappenedRef.current = false; 
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.classList.add('active-drag', 'dragging');
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current?.classList.remove('active-drag', 'dragging');
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current?.classList.remove('active-drag', 'dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    if (Math.abs(walk) > 3) {
        isDragHappenedRef.current = true;
    }
    e.preventDefault();
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    isDragHappenedRef.current = false; 
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 3) {
        isDragHappenedRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // KUNCI PERBAIKAN: Fungsi untuk membersihkan nama file menjadi ID unik tanpa spasi
  const getProjectId = (link) => {
      // 1. Hapus '/' dan '.pdf'
      let id = link.replace(/^\/|\.pdf$/g, '');
      // 2. Ganti semua spasi menjadi underscore
      return id.replace(/ /g, '_');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container"> 
        <h2 className="section-title">SOFTWARE TESTING AND QUALITY ASSURANCE</h2>
      </div>

      <div 
        className={`projects-grid ${isDragging ? 'dragging' : ''}`}
        ref={sliderRef} 
        
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            
            // MENGGUNAKAN ID TANPA SPASI
            projectId={getProjectId(project.link)}
            
            isDragHappenedRef={isDragHappenedRef} 
            delay={index * 150} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;