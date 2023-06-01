const { defineConfig } = require('webpack-define-config');
const path = require('path')


module.exports = defineConfig({
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '.bundle.js',
  },
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, '.')
    },
    proxy: {
      '/js-final-api/': {
        target: 'http://faceprog.ru',
        changeOrigin: true,
      }
    }
  }
})
