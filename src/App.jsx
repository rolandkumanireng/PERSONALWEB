// src/App.jsx

import React from 'react';
// MENGGUNAKAN HASHROUTER UNTUK KOMPATIBILITAS GITHUB PAGES
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Komponen Utama
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact'; // DIHAPUS SESUAI PERMINTAAN USER
import Footer from './components/Footer';
import PdfViewerPage from './components/PdfViewerPage';
import ScrollToTop from './components/ScrollToTop';

// Komponen Pembungkus untuk Layout Halaman Utama
const HomeLayout = () => (
    <>
        <Hero />
        <About />
        <Projects /> 
        {/* Contact dihapus dari layout */}
    </>
);

// Konten Aplikasi yang Menggunakan Hooks (Harus di dalam Router)
function AppContent() {
    const location = useLocation();
    
    // Logika untuk menyembunyikan Header/Footer di halaman PDF Viewer
    // Ini mencegah tumpang tindih yang terlihat di screenshot sebelumnya.
    const isViewerPage = location.pathname.startsWith('/view/');

    return (
        <div className="App">
            
            {/* Header hanya tampil jika BUKAN halaman Viewer */}
            {!isViewerPage && <Header />} 
            
            <main>
                <Routes>
                    
                    {/* Rute Halaman Utama (Homepage) */}
                    <Route path="/" element={<HomeLayout />} />
                    
                    {/* Rute PDF Viewer (halaman penuh) */}
                    <Route path="/view/:id" element={<PdfViewerPage />} />
                    
                </Routes>
            </main>
            
            {/* Footer hanya tampil jika BUKAN halaman Viewer */}
            {!isViewerPage && <Footer />} 
        </div>
    );
}

// Komponen Utama yang membungkus HashRouter
function App() {
    return (
        // Menggunakan HashRouter sebagai pembungkus
        <Router>
            <ScrollToTop /> 
            <AppContent />
        </Router>
    );
}

export default App;