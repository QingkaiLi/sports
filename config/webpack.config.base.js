module.exports = {
  entry: [
    './app/js/entry.js'
  ],
  output: {
    path: 'dist',
    filename: 'app.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?compact=false'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugin: []
}
