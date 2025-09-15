// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// Le decimos a Vite que use el plugin de React con SWC para compilar el código de React
// Puedes instalar este plugin con: npm install @vitejs/plugin-react-swc
// Este archivo configura Vite para usar React con SWC como compilador
// Puedes personalizar la configuración según tus necesidades

export default defineConfig({
  // Configuración de Vite para un proyecto React
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
  }
})
