import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const isDev = mode !== 'production';
  return {
    root: '.',
    plugins: [react()],
    base: './',
    build: {
      outDir: 'dist/renderer',
      emptyOutDir: false,
    },
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, 'src/shared'),
      },
    },
    server: {
      port: 5173,
      strictPort: true,
    },
    envPrefix: 'VITE_',
    define: {
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
    },
  };
});


