const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[fullhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      //Fonts: path.resolve(__dirname, 'src/assets/fonts/'),
      //Images: path.resolve(__dirname, 'src/assets/images/'),
      //Pdf: path.resolve(__dirname, 'src/assets/pdf/'),
      //Videos: path.resolve(__dirname, 'src/assets/video/'),
      //Styles: path.resolve(__dirname, 'src/assets/sass/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].css',
    }),
    /*new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src', 'assets/images'),
                to:'assets/images'
            }]
        }),*/
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    host: 'localhost',
    historyApiFallback: true,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    };
  } else {
    config.mode = 'development';
    config.devtool = 'source-map';
    //config.plugins.push(new BundleAnalyzerPlugin)
  }
  return config;
};
