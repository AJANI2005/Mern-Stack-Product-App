import { defineConfig ,loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.VITE_BACKEND_PORT || 5000;
const target = "http://localhost:" + port;

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "../", "");
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