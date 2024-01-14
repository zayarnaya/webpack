const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: {
        index: './src/index.js',
        add: './src/additional.js',
    },
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, './../build'),
		clean: true,
		assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				exclude: /\.module\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.module\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: true } }, 'sass-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
};
