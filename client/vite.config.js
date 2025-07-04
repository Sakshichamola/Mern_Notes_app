// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': { // Any request starting with /api
//         target: 'http://localhost:5000', // Will be proxied to your backend server
//         changeOrigin: true, // Needed for virtual hosted sites
//         rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites /api/notes to /notes on the backend
//       },
//     },
//   },
// });



// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Ensure this matches your backend port (5000)
        changeOrigin: true,
        // 🚨 REMOVE or COMMENT OUT THIS LINE IF IT EXISTS:
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});