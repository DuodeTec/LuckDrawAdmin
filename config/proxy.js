/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/william/dhl_luckdraw/public/index.php/api/v1/': {
      target:  'http://cx.com:8888',// '',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api/': '/william/dhl_luckdraw/public/index.php/api/v1/',
      // },
    },
  },
  test: {
    '/api/': {
      target:  'www.dalalapic.com',// 'http://cx.com:8888',
      changeOrigin: true,
      secure:true,//如果是https接口，需要配置这个参数为true`
      pathRewrite: {
        // '^/api/': '/william/dhl_luckdraw/public/index.php/api/v1/',
        '^/api/': '/h5/dhl/api/public/index.php/api/v1/',
      },
    },
  },
  prod: {
    '/h5/dhl/api/public/index.php/api/v1/': {
      // pathRewrite: {
      //   '^/api/': '/h5/dhl/api/public/index.php/api/v1/',
      // },
      // target:  'https://www.dalalapic.com',// 'http://cx.com:8888',
      // changeOrigin: true,// 如果接口跨域，需要进行这个参数配置为true
      // secure:true,//如果是https接口，需要配置这个参数为true`
    },
  },
};
