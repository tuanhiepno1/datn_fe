import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
      // ... other aliases can be added here
    ],
  },
});