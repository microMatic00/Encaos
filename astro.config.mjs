// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs()
  ],
  vite: {
    define: {
      // @ts-ignore
      'process.env.SMTP_HOST': JSON.stringify(process.env.SMTP_HOST),
      'process.env.SMTP_PORT': JSON.stringify(process.env.SMTP_PORT),
      'process.env.SMTP_USER': JSON.stringify(process.env.SMTP_USER),
      'process.env.SMTP_PASS': JSON.stringify(process.env.SMTP_PASS),
      'process.env.EMAIL_TO': JSON.stringify(process.env.EMAIL_TO),
    },
  },
});
