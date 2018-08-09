module.exports = {
  entry: {
    contentScript: './src/content-script/index.js',
    background: './src/background/index.js',
    popup: './src/popup/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
