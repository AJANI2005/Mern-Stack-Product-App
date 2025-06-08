import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "../", "");
  const target = "http://localhost:" + env.VITE_BACKEND_PORT;
  return {
    plugins: [react()],
    envDir: "../",
    server: {
      proxy: {
        '/api': {
          target,
        }
      }
    },
  };
});