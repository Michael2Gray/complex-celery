import react from '@vitejs/plugin-react';
import { defineConfig, UserConfigExport } from 'vite';

const config: UserConfigExport = {
  plugins: [react()],
};

// https://vitejs.dev/config/
export default defineConfig(config);
