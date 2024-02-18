const path = require('path');
const MiniCssExtractPluginInstance = require('../../plugins/MiniCssExtractPlugin');
const styles = require('../../rules/styles')(true);
const styles_modules = require('../../rules/style_modules')(true);

module.exports = {
	mode: 'production',
	entry: {
        index: path.resolve(__dirname, './../../../src/index.js'),
        add: path.resolve(__dirname, './../../../src/additional.js'),
    },
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, './../../../build'),
		clean: true,
		assetModuleFilename: path.join('assets', '[name].[contenthash][ext]'),
	},
	module: {
		rules: [ styles, styles_modules ],
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
