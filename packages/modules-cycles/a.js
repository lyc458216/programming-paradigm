console.log('a starting (%s)', module.filename.split('/').pop());
exports.done = false;

var b = require('./b.js');
console.log(`in a, b.done = ${b.done} (${module.filename.split('/').pop()})`);
exports.done = true;
console.log('a done (%s)', module.filename.split('/').pop());
