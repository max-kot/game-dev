const pathSrc = './src';
const pathDest = './dist';

const path = {
	src: pathSrc,
	dest: pathDest,

	html: {
		src: pathSrc + '/html/*.html',
		watch: pathSrc + '/html/**/*.html',
		dest: pathDest,
	},

	styles: {
		src: pathSrc + '/scss/**/*.{scss,sass}',
		watch: pathSrc + '/scss/**/*.{scss,sass}',
		dest: pathDest + '/css',
	},

	scripts: {
		src: [
			pathSrc + '/js/*.js',
			'!./src/js/main.min.js'
		],
		watch: [
			pathSrc + '/js/**/*.js',
			'!./src/js/main.min.js',
		],
		dest: pathDest + '/js',
	},

	fonts: {
		src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts',
	},

	img: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + '/img',
	},
}

module.exports = path;