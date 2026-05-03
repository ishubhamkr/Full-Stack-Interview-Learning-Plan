import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Full-Stack-Interview-Learning-Plan/',
  server: {
    port: 4000,
    open: true,
  },
  preview: {
    port: 4000,
  },
})
