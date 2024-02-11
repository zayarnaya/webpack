const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPluginInstance = require('../plugins/MiniCssExtractPlugin');

module.exports = {
	mode: 'production',
	entry: {
        index: path.resolve(__dirname, './../../src/index.js'),
        add: path.resolve(__dirname, './../../src/additional.js'),
    },
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, './../../build'),
		clean: true,
		assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
	},
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
	plugins: [ MiniCssExtractPluginInstance ],
	optimization: {
		splitChunks: {
			maxSize: 25000,
			chunks: 'all',
			cacheGroups: {
				vendor: {
				  test: /[\\/]node_modules[\\/]/,
				  name: 'vendor'
				}
			  }
		}
	}
};
