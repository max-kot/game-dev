const app = require('./configs/app.js');
const path = require('./configs/path.js');
const set = require('./configs/set.js');

// Tasks 
const html = require('./tasks/html.js');
const styles = require('./tasks/styles.js');
const scripts = require('./tasks/scripts.js');
const clear = require('./tasks/clear.js');
const images = require('./tasks/images.js');
const fonts = require('./tasks/fonts.js');

// Watcher
function watcher() {
	app.gulp.watch(path.html.watch, html)
	app.gulp.watch(path.styles.watch, styles)
	app.gulp.watch(path.scripts.watch, scripts)
	app.gulp.watch(path.img.watch, images);
	app.gulp.watch(path.fonts.watch, fonts);
}

// Сервер
function server() {
	app.browserSync.init({
		server: {
			baseDir: path.dest // указываем директорию
		}
	})
}

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clear = clear;
exports.watcher = watcher;
exports.server = server;
exports.images = images;
exports.fonts = fonts;

// Продакшен
const build = app.gulp.series(
	clear,
	app.gulp.parallel(
		html,
		styles,
		scripts,
		images,
		fonts
	),
)

// Разработка
const dev = app.gulp.series(
	build,
	app.gulp.parallel(
		watcher,
		server
	),
)


exports.dev = dev;
exports.build = build;

exports.default = dev;