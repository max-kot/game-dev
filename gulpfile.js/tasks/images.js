const app = require('../configs/app.js')
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function images() {
	return app.gulp.src(path.img.src)
		.pipe(app.webp())
		.pipe(app.gulp.dest(path.img.dest))
		.pipe(app.gulp.src(path.img.src))
		.pipe(app.newer(path.img.dest))
		.pipe(app.imagemin(set.imagemin))
		.pipe(app.gulp.dest(path.img.dest))
		.pipe(app.browserSync.stream())
}

module.exports = images;