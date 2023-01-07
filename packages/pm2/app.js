const fs = require('fs');
const Koa = require('Koa');
const app = new Koa();

// 访问 localhost:3000 直接报错崩溃
app.use(ctx => {
    fs.readFile('somefile.txt', function(err, data) {
        if (err) throw err;
        console.log(data);
        ctx.body = 'Helllo Koa';
    })
})

app.listen(3000);