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
			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				use: [
					{ 
						loader: 'url-loader',
						options: {
							limit: 2000,
							name: 'assets/[name]-[hash:5].[ext]',
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true,
					        mozjpeg: {
					          progressive: true,
					          quality: 65
					        },
					        pngquant: {
					          quality: '65-90',
					          speed: 4
					        },
					        gifsicle: {
					          interlaced: false,
					        },
					        // the webp option will enable WEBP
					        webp: {
					          quality: 75
					        }
						},
					}
				]
			},
			{
				test: /\.(html)$/,
				use: [
					{ 
						loader: 'html-loader',
					    options: {
					    	attrs: ['img:src'],
					    }
					},
				],
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
