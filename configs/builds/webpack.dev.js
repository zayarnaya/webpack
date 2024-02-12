const path = require('path');

module.exports = {
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './../../dist'),
		clean: true,
		assetModuleFilename: path.join('assets', '[name].[ext]'),
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				exclude: /\.module\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.module\.(scss|css)$/,
				use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'sass-loader'],
			},
		],
	},
	devServer: {
		watchFiles: path.join(__dirname, './../src'),
		port: 9000,
		hot: true,
	},
};
