const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, './../../src/index.js'),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './../../index.html'),
			filename: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js(x?)$/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.*', '.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
		alias: {
			'@': path.resolve(__dirname, './../../src'),
			'@assets': path.resolve(__dirname, './../../src/assets'),
			'@images': path.resolve(__dirname, './../../src/assets/images'),
			'@components': path.resolve(__dirname, './../../src/views/components'),
		}
	},
};
