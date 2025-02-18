import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs'; // Agregar fs para evitar el error

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'fs': fs, // Evitar el uso incorrecto de fs/promises
  },
});


