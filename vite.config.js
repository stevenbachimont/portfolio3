import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8282,
    watch: {
      usePolling: true
    },
    allowedHosts: [
      'stevenbachimont.com',
      'www.stevenbachimont.com',
      'localhost',
      '.localhost'
    ]
  }
})
