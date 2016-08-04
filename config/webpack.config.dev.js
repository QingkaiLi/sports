let baseConfig = require('./webpack.config.base')

let config = Object.assign(baseConfig, {
  devServer: {
    contentBase: 'app',
    port: 8081
  }
})

module.exports = config
