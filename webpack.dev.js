const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', 
  devtool: 'eval',
  output: { filename: 'assets/js/[name].js' },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    port: 5173,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
});
