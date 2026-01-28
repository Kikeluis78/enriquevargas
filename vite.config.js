

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// Configuración de Vite para producción
export default defineConfig({
  plugins: [react(),
 tailwindcss(),
  ],
  base: '/', // asegura que los paths de JS y CSS se resuelvan correctamente
})
