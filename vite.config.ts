import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': `${path.resolve(__dirname, './src/api')}`,
      '@assets': `${path.resolve(__dirname, './src/assets')}`,
      '@config': `${path.resolve(__dirname, './src/config')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks')}`,
      '@redux': `${path.resolve(__dirname, './src/redux')}`,
      '@routes': `${path.resolve(__dirname, './src/routes')}`,
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@types': `${path.resolve(__dirname, './src/types')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`,
      '@views': `${path.resolve(__dirname, './src/views')}`,
    },
  },
});
