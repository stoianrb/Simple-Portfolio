import { defineConfig } from 'vite';  // Asigură-te că importi defineConfig din vite
import react from '@vitejs/plugin-react';  // Asigură-te că importi pluginul react
import { VitePWA } from 'vite-plugin-pwa';  // Asigură-te că importi pluginul VitePWA

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Portfolio Robert',
        short_name: 'Portfolio',
        description: 'Portofoliul meu PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',  // Adaugă alias pentru src
      '@locales': '/src/locales',  // Alias corect pentru /src/locales
      '@i18n': '/src/i18n',
    },
  },
});
