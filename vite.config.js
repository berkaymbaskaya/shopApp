import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    base:'/firtApp/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('/firtApp./src', import.meta.url))
    }
  }
})
