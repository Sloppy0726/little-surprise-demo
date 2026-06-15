import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative asset paths so the demo works from GitHub Pages project URLs.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
      },
    },
  },
});
