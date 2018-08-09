const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components|\.spec\.js)/,
        use: [
          {
            loader: 'webpack-strip-block',
            options: {
              start: 'DEV-START',
              end: 'DEV-END'
            }
          }
        ]
      }
    ]
  },
})
