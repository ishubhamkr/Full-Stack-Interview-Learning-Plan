import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is used at build time for GitHub Pages deployment.
// Set it in your environment or CI: VITE_BASE=/your-repo-name/
// For local dev it defaults to '/'.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 4000,
    open: true,
  },
  preview: {
    port: 4000,
  },
})
