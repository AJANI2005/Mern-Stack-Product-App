import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig(() => {

  const env = loadEnv(mode, process.cwd());
  const port = env.PORT || 5000;
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
