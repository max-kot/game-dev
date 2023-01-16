const set = {

	htmlmin: {
		collapseWhitespace: true, // убирает все пробелы
	},

	sass: {
		outputStyle: 'compressed',
	},

	rename: {
		suffix: '.min',
	},

	autoprefixer: {
		overrideBrowserslist: ['last 10 version'],
		grid: true,
	},

	cleanCss: {
		level: 2
	},

	webpack: {
		mode: 'production', // 'development'
		output: {
			filename: 'main.min.js'
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							]
						}
					}
				}
			]
		}
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	},

	imagemin: {
		vebose: true, // для просмотра размера
	},
}

module.exports = set;