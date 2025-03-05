module.exports = {
  //路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    });
    const entry = config.entry('app');
    entry.add('babel-polyfill').end();
    entry.add('classlist-polyfill').end();
    entry.add('@/mock').end();
  },
  css: {
    extract: { ignoreOrder: true }
  },
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 1666,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:707',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/ws-api': {
        target: 'http://10.197.210.124:7001',
        ws: true,
        pathRewrite: {
          '^/ws-api': '/'
        }
      },
      '/gate-api': {
        target: 'http://10.197.210.124:7002',
        ws: true,
        pathRewrite: {
          '^/gate-api': '/'
        }
      },
    }
  }
};
