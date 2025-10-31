// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';      // <-- Pastikan diimpor!
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import PdfViewerPage from './components/PdfViewerPage'; 
import ScrollToTop from './components/ScrollToTop';// Komponen Viewer PDF

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header /> 
        
        <main>
          <Routes>
            
            {/* Rute Halaman Utama (Homepage) */}
            <Route path="/" element={
              <>
                <Hero />
                <About /> {/* <-- SECTION ABOUT ME SUDAH DIMASUKKAN DI SINI */}
                <Projects /> 
                <Contact /> 
              </>
            } />
            
            {/* Rute PDF Viewer */}
            <Route path="/view/:id" element={<PdfViewerPage />} />
            
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;