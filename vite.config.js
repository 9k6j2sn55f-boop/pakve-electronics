import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        catalog: resolve(import.meta.dirname, 'catalog.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        notfound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
});