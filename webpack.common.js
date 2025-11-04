const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'), 
  output: {
    path: path.resolve(__dirname, 'dist'),    
    filename: 'assets/js/[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: false,                                  
  },
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|svg|webp)$/i, type: 'asset', parser: { dataUrlCondition: { maxSize: 8 * 1024 } } },
      { test: /\.(woff2?|ttf|otf|eot)$/i, type: 'asset/resource' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // ← was 'src/index.html'
      inject: 'body',
    }),
  ],
  resolve: { extensions: ['.js'] },
};
