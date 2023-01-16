const app = require('../configs/app.js')
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function fonts() {
	return app.gulp.src(path.fonts.src)
		.pipe(app.newer(path.fonts.dest))
		.pipe(app.fonter(set.fonter)) // плагин конвертирует шрифты
		.pipe(app.gulp.dest(path.fonts.dest))
		.pipe(app.ttf2woff2()) // плагин конвертирует шрифты в ttf2 и woff2
		.pipe(app.gulp.dest(path.fonts.dest))
		.pipe(app.browserSync.stream())
}


module.exports = fonts;