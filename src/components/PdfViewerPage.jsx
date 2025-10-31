// src/components/PdfViewerPage.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PdfViewerPage.css';

// --- KUNCI: PETA DATA DENGAN KEY TANPA SPASI (DISAMAKAN DENGAN ID ROUTE) ---
// Note: Key harus tanpa spasi dan disamakan dengan output getProjectId di Projects.jsx
const projectDataMap = {
    // Key (ID dari URL, spasi diganti underscore) : Link (Nama File Asli)
    "Kelompok_1-compressed": { title: "Strategi & Klasifikasi Software Testing", link: "/Kelompok 1-compressed.pdf" },
    "Kelompok_2": { title: "Aspek UI/UX Testing", link: "/Kelompok 2.pdf" },
    "Kelompok_3": { title: "Penyusunan Testing Plan", link: "/Kelompok 3.pdf" },
    "Kelompok_4_compressed": { title: "Test Scenario, Test Case & Bug Report", link: "/Kelompok 4_compressed.pdf" },
    "Kelompok_5": { title: "Prinsip Dasar Unit Testing", link: "/Kelompok 5.pdf" },
    "Kelompok_6_compressed": { title: "Pengujian API (API Testing)", link: "/Kelompok 6_compressed.pdf" },
    "Kelompok_7": { title: "Pengantar Selenium WebDriver", link: "/Kelompok 7.pdf" },
    "Kelompok_8_compressed": { title: "End-to-End Testing dengan Cypress", link: "/Kelompok 8_compressed.pdf" },
};

const PdfViewerPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectDataMap[id]; 

    // Jika ID tidak ditemukan di peta data
    if (!project) {
        return <div className="container" style={{ padding: '150px 0', textAlign: 'center', minHeight: '100vh' }}>
            <h2 style={{color: 'red'}}>404 | Proyek tidak ditemukan.</h2>
            <p className="text-secondary">Pastikan file PDF ada di folder public/ dan ID rute (<strong>{id}</strong>) sudah benar.</p>
            <button onClick={() => navigate('/')} className="back-button">&larr; Kembali ke Home</button>
        </div>;
    }
    
    // KUNCI PERBAIKAN: Menggunakan link lokal langsung untuk iframe
    // Browser modern memiliki viewer PDF built-in yang akan merender file
    const pdfUrl = project.link; 

    return (
        <div className="pdf-viewer-page">
            <div className="container viewer-header">
                {/* Tombol kembali */}
                <button onClick={() => navigate('/')} className="back-button">
                    &larr; Kembali ke Portofolio
                </button>
                <h1 className="viewer-title">{project.title}</h1>
                <p className="text-secondary">Menampilkan: {project.link.replace('/', '')}</p>
            </div>

            <div className="pdf-frame-wrapper">
                <iframe 
                    title={project.title}
                    src={pdfUrl} // Link langsung ke file di folder public/
                    frameBorder="0"
                    allowFullScreen
                    className="pdf-iframe"
                >
                    Browser Anda tidak mendukung iFrames. Silakan unduh PDF.
                </iframe>
            </div>
            
        </div>
    );
};

export default PdfViewerPage;