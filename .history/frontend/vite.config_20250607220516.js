import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig(({mode}) => {

  const port = process.env.VITE_BACKEND_PORT || 5000;
  const target = `http://localhost:${port}`;

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target,
        }
      }
    }
  }
})
