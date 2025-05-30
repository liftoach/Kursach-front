import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Kursach-front/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
