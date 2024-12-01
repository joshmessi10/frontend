const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your Node.js backend server
        changeOrigin: true,
        secure: false, // Set this to true if you're using HTTPS
        pathRewrite: { '^/api': '' }, // Optional: removes `/api` prefix before forwarding to the backend
      },
    },
  },
});