const path = require('path');
const htmlWebpackPluginInstance = require('../plugins/HtmlWebpackPlugin');
const images = require('../rules/images');
const fonts = require('../rules/fonts');
const jsx = require('../rules/jsx');
const tsx = require('../rules/tsx');

module.exports = {
	entry: path.join(__dirname, './../../src/index.js'),
	plugins: [ htmlWebpackPluginInstance ],
	module: {
		rules: [ images, fonts, jsx, tsx ],
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
	devServer: {
		historyApiFallback: true
	}
};
