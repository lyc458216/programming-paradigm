// 故意抛出异常，测试pm2的集群异常捕获能力
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    if(ctx.path === '/good'){
        return ctx.body = 'good'
    }
    fs.readFile('somefile.txt', function(err, data){
        try {
            console.log(`programe go try`)
            if (err) throw err;
            console.log(`programe go try and not err, data: ${data}`);
            ctx.body = 'Hello Koa';
        } catch(e) {
            // 因为是异步读取的，所以这里捕获不到readCallback函数中跑出的异常;
            // 但是可以捕获到上面👆try里抛出的异常
            console.log(`programe go catch: ${e}`)
        } finally {
            console.log('离开 try/catch');
        }
    })
})

app.listen(3000);