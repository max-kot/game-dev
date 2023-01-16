const app = require('../configs/app.js');
const path = require('../configs/path.js');
const set = require('../configs/set.js');

const clear = () => {
	return app.del(path.dest)
}

module.exports = clear;