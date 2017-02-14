var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry:{
		head:'./_dev/_assets/_build_head.js',
		main:'./_dev/_assets/_build_main.js',
		content:'./_dev/_assets/_build_content.js',
		media:'./_dev/_assets/_build_media.js',
		grid:'./_dev/_assets/_build_grid.js',
		scroll:'./_dev/_assets/_build_scroll.js',
		animation:'./_dev/_assets/_build_animation.js',
		theme:'./_dev/_assets/_build_theme.js'
	},
	output: {
		path: './_dev/lib/bundle/',
		filename: '[name].js'
	},
	//devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: "css-loader!sass-loader"
				
			},
			{
				test: /\.css$/,
				loader: "css-loader"
				
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader',
					'image-webpack-loader'
				]
			},
			{ test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader" },
			{ test: /\.eot$/,    loader: "file-loader" },
			{ test: /\.svg$/,    loader: "file-loader" }
		]
	}
	
};



//var path = require('path');
//var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

/*module.exports = {
	entry: {
		about: './dist/about',
		contact: './dist/contact'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
				{
			    test: /\.(png|jpg)$/,
			    loader: 'url-loader?limit=10000'
			}
	 ]
	},
	plugins: [
		new CommonsChunkPlugin('commons', 'commons.bundle.js')
	]

};*/





