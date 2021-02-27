const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const pkg = require('./package.json')

// const isDevMode = process.env.NODE_ENV

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  devtool: 'source-map',
  entry: {
    popup: './popup/index.js',
    background: './background.js',
    options: './options/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset' },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'icons', to: 'icons' }, { from: 'manifest.json' }],
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: 'popup/popup.html',
      chunks: 'popup',
    }),
    new HtmlWebpackPlugin({
      filename: 'options.html',
      template: 'options/options.html',
      chunks: 'options',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
