import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh(), vitePaths()],
  server: {
    proxy: {
      '/api': {
        target: 'https://w7i1o4lwch.execute-api.ap-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
