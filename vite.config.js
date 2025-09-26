import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Use BASE_PATH env or, when building on Vercel, default to '/'
const basePath = process.env.BASE_PATH || (process.env.VERCEL ? '/' : '/my-portfolio-site/');

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [tailwindcss(), react()],
});
