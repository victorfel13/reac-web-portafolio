import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/reac-web-portafolio/', // 🔑 coincide con tu repo
  plugins: [react()],
})
