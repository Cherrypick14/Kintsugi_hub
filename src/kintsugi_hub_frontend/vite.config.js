import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import NodeExternals from 'vite-plugin-node-externals';

dotenv.config({ path: '../../.env' });

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      plugins: [react(), NodeExternals(), nodeResolve()],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      // Remove the jsxInject option
    },
    include: ['js-sha256'],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
    "headers": {
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://cdnjs.cloudflare.com; connect-src 'self' http://127.0.0.1:4943; img-src 'self' data:; object-src 'self';"
    }
  },
  plugins: [
    react(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
      {
        find: 'chart.js/helpers',
        replacement: 'chart.js/dist/helpers.esm.js',
      }
    ],
  },
});
