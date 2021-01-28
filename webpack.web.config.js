const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    web: './src/index.web.js',
  },
  mode: devMode ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new MiniCssExtractPlugin()],
};
