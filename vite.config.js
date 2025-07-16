import { defineConfig } from 'vite'

export default defineConfig({
  base: '/novo-site-ifro/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  server: {
    port: 3000,
    open: true
  },
  
  preview: {
    port: 4173
  }
})
