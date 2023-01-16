const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

function html() {
	return app.gulp.src(path.html.src)
		.pipe(app.plumber({
			errorHandler: app.notify.onError(error => ({
				title: 'HTML',
				message: error.message
			}))
		}
		))
		.pipe(app.fileInclude())
		.pipe(app.webpHtml()) // чтобы автоматом ставил тег picture для webp
		.pipe(app.htmlmin(set.htmlmin))
		.pipe(app.gulp.dest(path.html.dest))
		.pipe(app.browserSync.stream())
}

module.exports = html;