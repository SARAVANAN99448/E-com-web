import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'https://e-com-web-ujbh.onrender.com/'
    }
  },
  plugins: [react()],
})
