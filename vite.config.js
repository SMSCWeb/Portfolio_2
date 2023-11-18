import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // other Vite configuration options...

  assetsInclude: '**/*.{png,jpg,jpeg,gif,svg,webp,ico,woff,woff2,mp3,mp4,webm,ogg,ogv,ttf,eot,docx}',

  // other Vite configuration options...


})
