const WriteFilePlugin = require('write-file-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    contentScript: './src/content-script/index.js',
    background: './src/background/index.js',
    popup: './src/popup/index.js',
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    https: true, // enable https to get rid of ws connection failures from injected https pages
    port: 4000,
    clientLogLevel: 'none',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
