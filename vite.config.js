import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ PERBAIKAN: Sesuaikan dengan nama repo GitHub yang benar
export default defineConfig({
  plugins: [react()],
  base: '/PERSONAL-WEB/', // <-- Nama repo yang sesuai dengan GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
