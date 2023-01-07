// 故意抛出异常，测试pm2的集群异常捕获能力
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    if (ctx.path === '/good') {
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
            // Node.js里约定，同步代码才能捕获异常，异步代码不能直接使用 try/catch 
            // (与你采用的异步流程控制方式有关，如果使用Promise，就使用Promise的异常处理方法)。
            console.log(`programe go catch: ${e}`)
        } finally {
            console.log('离开 try/catch');
        }
    })
})

app.listen(3000);