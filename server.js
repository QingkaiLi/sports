const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const open = require('open')
const config = require('./config/webpack.' + (process.env.NODE_ENV || 'dev') + '.js')
console.log(config)

// webpack(config, function(err, stats) {
//     if (err) throw err;
//   })
new WebpackDevServer(webpack(config))
  .listen(config.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
    console.log('Opening your system browser...');
    // open('http://localhost:' + config.port + '/webpack-dev-server/');
  })
