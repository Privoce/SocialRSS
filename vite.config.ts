import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh(), vitePaths()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://w7i1o4lwch.execute-api.ap-east-1.amazonaws.com',
        target:
          'http://ec2-18-166-42-129.ap-east-1.compute.amazonaws.com:3321/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
