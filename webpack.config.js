/*eslint-env node*/
require('dotenv').config()

const webpack = require('webpack')
const Path = require('path')

const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  context: Path.join(__dirname, 'src'),
  devtool: debug ? 'eval-source-map' : debug,
  entry: {
    app: './js/client.js',
    vendor: [
      'react',
      'react-redux',
      'redux'
    ]
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.test\.js$).*\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: debug ? [] : [
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity,
      filename: '[name].bundle.js'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      test: /\.js$/
    }),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, 'src', 'index.html'),
      filename: Path.join(__dirname, 'dist', 'index.html')
    })
  ]
}
