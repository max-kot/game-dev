const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

const scripts = () => {
	return app.gulp.src(path.scripts.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'JavaScript',
				message: error.message
			}))
		}
		))
		.pipe(app.webpackStream(set.webpack))
		.pipe(app.gulp.dest(path.scripts.dest))
		.pipe(app.browserSync.stream())
}

module.exports = scripts;