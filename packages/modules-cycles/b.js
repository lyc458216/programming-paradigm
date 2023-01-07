console.log('b starting (%s)', module.filename.split('/').pop());
exports.done = false;

var a = require('./a.js');
console.log(`in b, a.done = ${a.done}, (${module.filename.split('/').pop()})`);
exports.done = true;
console.log('b done (%s)', module.filename.split('/').pop());