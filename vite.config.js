import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import * as path from 'path';
import {fileURLToPath} from 'url';

// https://vitejs.dev/config/

// Get __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(),  svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Alias for the src directory
    },
  }
})
