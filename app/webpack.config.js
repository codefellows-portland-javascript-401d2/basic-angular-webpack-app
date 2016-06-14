const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: '../server/public',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [new htmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node.modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }
  ]

  }
};
