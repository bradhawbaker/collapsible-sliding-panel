const path = require('path');
const merge = require('webpack-merge');
const core = require('./webpack.core.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(core, {
  devtool: 'source-map',
  entry: {
    'collapsible-sliding-panel' : [
      path.join(__dirname, './index.js')
    ]
  },
  output: {
    path:  path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    library: 'collapsibleSlidingPanel',
    libraryTarget: 'umd'
  },
  externals: [
    'react-dom',
    'react',
    'prop-types'
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [

          'style-loader', 'css-loader','sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({sourceMap: true}), new OptimizeCSSAssetsPlugin({})],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
});