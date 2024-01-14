const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
        {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.svg$/,
            type: 'asset/resource',
            generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
            },
        },
        {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'template.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        }),
  ],
  devServer: {     
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    },

};
