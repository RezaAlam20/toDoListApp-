const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash].js',
    publicPath: '',
    assetModuleFilename: 'assets/[name][ext][query]',
    clean: false,
  },
  module: {
    rules: [

      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
        generator: { filename: 'assets/images/[name][ext]' } // <—
      },

      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][ext]' } // <—
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: 'body',
    }),
  ],
  resolve: { extensions: ['.js'] },
};
