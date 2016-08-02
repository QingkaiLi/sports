'use strict'
let path = require('path')

module.exports = {
  port: 8082,
  devtool: 'eval',
  entry: [
    // 'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    // 'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: 'app.js',
    publicPath: '/dist/assets'
  },
  devServer: {
    contentBase: './',
    port: 8082
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
      test: /\.styl/,
      loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
    }, {
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
}
