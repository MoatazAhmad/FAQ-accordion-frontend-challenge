import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pug from 'vite-plugin-pug'


// https://vitejs.dev/config/
export default defineConfig({
  base:"/FAQ-accordion-frontend-challenge",
  plugins: [
    vue(),
    pug()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
