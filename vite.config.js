import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset URLs, so one build works wherever it is served from: the
  // domain root (Vercel, Netlify), a project subpath (GitHub Pages at
  // /CHOURANGI/), or a raw-file proxy. This is a single page with no client
  // routing, so there is no nested-path caveat.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssTarget: 'safari16',
  },
})
