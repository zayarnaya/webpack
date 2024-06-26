const path = require('path');
const envPlugin = require('../../plugins/DefinePlugin')('development');
const styles = require('../../rules/styles')();
const styles_modules = require('../../rules/style_modules')();

module.exports = {
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './../../../dist'),
		clean: true,
		assetModuleFilename: path.join('assets', '[name].[ext]'),
	},
	devtool: 'source-map',
	plugins: [envPlugin],
	module: {
		rules: [ styles, styles_modules ],
	},
	devServer: {
		watchFiles: path.join(__dirname, '@'),
		port: 9000,
		hot: true,
	},
};
