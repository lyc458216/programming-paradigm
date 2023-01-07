console.log('main starting (%s)', module.filename.split('/').pop());
var a = require('./a.js');
var b = require('./b.js');
console.log(`in main, a.done=${a.done}, b.done=${b.done} (${module.filename.split('/').pop()})`);

// 注意，虽然 main.js 同时引用了 a.js 和 b.js，
// 但是根据 Node.js 的模块缓存策略，模块只执行一次，不用担心内存问题。
// 另外，当模块间出现循环引用时，一定要注意代码的位置。

// 执行结果：
// main starting (main.js)
// a starting (a.js)
// b starting (b.js)
// in b, a.done = false, (b.js)
// b done (b.js)
// in a, b.done = true (a.js)
// a done (a.js)
// in main, a.done=true, b.done=true (main.js)