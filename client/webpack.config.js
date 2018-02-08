/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ , query: {presets: ['es2015', 'react']}},
      { test: /\.css$/, loader: 'style-loader'},
      { test: /\.css$/, loader: 'css-loader'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },

  // add this line
  plugins: [HtmlWebpackPluginConfig]
}