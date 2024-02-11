const { merge } = require('webpack-merge');

const common = require('./configs/builds/webpack.common');
const dev = require('./configs/builds/webpack.dev');
const prod = require('./configs/builds/webpack.prod');

module.exports = env => {
	return merge(common, env.production ? prod : dev);
};
