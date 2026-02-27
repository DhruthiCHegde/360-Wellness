import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Add this for Tailwind v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ensure Tailwind plugin is active
  ],
  base: '/360-Wellness/', 
})
