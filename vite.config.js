import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(() => {
  return {
    base: '/oss-project-explorer/',
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});