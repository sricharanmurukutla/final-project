const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://167.172.230.29:3000',
      changeOrigin: true,
    })
  );
};