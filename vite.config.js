import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves a project site from /<repo>/, so the build needs that
// base. Everywhere else — local dev, Vercel, Netlify, any custom domain — the
// site sits at the root.
const base = process.env.GITHUB_PAGES === 'true' ? '/CHOURANGI/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssTarget: 'safari16',
  },
})
