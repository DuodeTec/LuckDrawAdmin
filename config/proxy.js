/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://cx.com:8888',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/william/dhl_luckdraw/public/index.php/api/v1/',
      },
    },
  },
  test: {
    '/api/': {
      target: 'http://cx.com:8888',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/william/dhl_luckdraw/public/index.php/api/v1/',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'http://cx.com:8888',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/william/dhl_luckdraw/public/index.php/api/v1/',
      },
    },
  },
};
