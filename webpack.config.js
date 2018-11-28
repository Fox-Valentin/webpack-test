var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: {
		main: './src/app.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name]-[chunkhash].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
					   "presets": ["latest"]
					},
				},
    			exclude: __dirname + 'node_modules',
    			include: __dirname + 'src',
			},
			{
				test: /\.css$/,
				  use: [
				    { loader: 'style-loader' },
				    { loader: 'css-loader', options: { importLoaders: 1 } },
				    { loader: 'postcss-loader',
				    	options: {
				    		ident: 'postcss',
						    plugins: (loader) => [
							      require('autoprefixer')({
							      	browsers: ['last 5 versions'],
							      }),
						    ]
				    	}
				     }
				  ]
			},
			{
				test: /\.less$/,
				use: [
				    { loader: 'style-loader' },
				    { loader: 'css-loader', options: { importLoaders: 1 } },
				    { loader: 'postcss-loader',
				    	options: {
				    		ident: 'postcss',
						    plugins: (loader) => [
							      require('autoprefixer')({
							      	browsers: ['last 5 versions'],
							      }),
						    ]
				    	}
				     },
				     { loader: 'less-loader' }
				],
			},
			{
				test: /\.html$/,
				use: [ { loader: 'html-loader' } ]
			},
			{
				test: /\.tpl$/,
				use: [ { loader: 'ejs-loader' } ]
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
				filename: 'index.html',
				template: 'index.html',
				inject: 'body',
			}),
		new CleanWebpackPlugin(['dist'])
	],
}
