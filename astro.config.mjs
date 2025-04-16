// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import vercel from '@astrojs/vercel';

// Cargar variables de entorno solo en desarrollo
const isDev = process.env.NODE_ENV !== 'production';
if (isDev) {
  const dotenv = await import('dotenv');
  dotenv.config();
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs()
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200, 1920],
      domains: [],
      remotePatterns: [],
    },
  }),
  vite: {
    define: {
      // @ts-ignore
      'process.env.SMTP_HOST': JSON.stringify(process.env.SMTP_HOST || 'smtp.example.com'),
      'process.env.SMTP_PORT': JSON.stringify(process.env.SMTP_PORT || '587'),
      'process.env.SMTP_USER': JSON.stringify(process.env.SMTP_USER || 'user@example.com'),
      'process.env.SMTP_PASS': JSON.stringify(process.env.SMTP_PASS || 'password'),
      'process.env.EMAIL_TO': JSON.stringify(process.env.EMAIL_TO || 'contact@example.com'),
    },
  },
});
