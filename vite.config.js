import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact(), compression({ algorithm: 'gzip', ext: '.gz' })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-icons': ['react-icons'],
          'vendor-carousel': ['react-slick', 'slick-carousel', 'swiper'],
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
        // Optimize chunk file names
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|gif|tiff|bmp|ico|svg/.test(ext)) {
            return `images/[name].[hash][extname]`;
          } else if (/woff|woff2|ttf|otf|eot/.test(ext)) {
            return `fonts/[name].[hash][extname]`;
          } else if (ext === 'css') {
            return `css/[name].[hash][extname]`;
          }
          return `[name].[hash][extname]`;
        },
      },
    },
    // Improve build performance
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'axios'],
    exclude: ['flowbite'],
  },
})