import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Important: ensures assets work in static deploy
  build: {
    outDir: 'dist', // default output folder for Vercel
  },
})