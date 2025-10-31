// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Menggulir ke posisi paling atas (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Panggil ini setiap kali 'pathname' (URL) berubah

  return null; // Komponen ini tidak merender apa-apa
};

export default ScrollToTop;