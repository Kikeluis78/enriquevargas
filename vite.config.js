

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// Configuración de Vite para producción
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // asegura que los paths de JS y CSS se resuelvan correctamente
  server: {
    host: '0.0.0.0', // escucha en todas las interfaces de red (LAN, móvil, etc.)
    port: 5173,
  },
})
