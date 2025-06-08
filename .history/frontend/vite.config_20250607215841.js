import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(() => {

  const env = loadEnv(mode, process.cwd());
  const port = env.PORT || 5000;
  const target = `http://localhost:${port}`;

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: target,
        }
      }
    }
  }
})
