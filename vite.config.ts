import react from '@vitejs/plugin-react';
import { defineConfig, UserConfigExport } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

const config: UserConfigExport = {
  plugins: [
    react(),
    VitePluginHtmlEnv({
      VITE_PACKAGE_VERSION: process.env.npm_package_version,
    }),
  ],
};

// https://vitejs.dev/config/
export default defineConfig(config);
