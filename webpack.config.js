const { merge } = require('webpack-merge');

const common = require('./configs/webpack.common');
const dev = require('./configs/webpack.dev');
const prod = require('./configs/webpack.prod');

module.exports = env => {
	return merge(common, env.production ? prod : dev);
};
