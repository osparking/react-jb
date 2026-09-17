import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 개발 및 빌드 시 소스맵을 활성화합니다.
  server: {
    sourcemap: true, 
  },
  build: {
    sourcemap: true,
  }  
})
