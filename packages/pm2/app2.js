const fs = require('fs');
const Koa = require('Koa');
const app = new Koa();

app.use(ctx => {
    if (ctx.path === '/good') {
        return ctx.body = 'good'
    }
    fs.readFile('somefile.txt', function (err, data) {
        if (err) throw err;
        console.log(data);
        ctx.body = 'Helllo Koa';
    })
})
// 捕获 uncaughtException 异常可以防止进程崩溃
process.on('uncaughtException', function(err){
    console.log(err);
})

app.listen(3000);