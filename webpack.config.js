const HtmlWebPackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  entry: {
    contentScript: './src/content-script/index.js',
    background: './src/background/index.js',
    popup: './src/popup/index.js',
  },
  devtool: 'source-map',
  devServer: {
    port: 4000,
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
    new HtmlWebPackPlugin({
      template: "./src/dev/index.html",
      filename: "./index.html"
    }),
    new WriteFilePlugin(),
  ]
}
