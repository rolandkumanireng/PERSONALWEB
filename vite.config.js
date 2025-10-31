import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Sesuaikan base-nya dengan nama repo GitHub kamu!
export default defineConfig({
  plugins: [react()],
  base: '/PERSONALWEB/', // <-- wajib diisi sesuai nama repo!
})
