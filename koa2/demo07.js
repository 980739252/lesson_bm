const Koa = require('koa');
const app = new Koa()
const Router = require('koa-router')
let home = new  Router();
    home.get('/zzc',async(ctx)=>{
        ctx.body="hello world home"
    })
    .get('/zza',async(ctx)=>{
        ctx.body="zza home"
    })
let todo = new Router();
    todo.get('/zzc',async(ctx)=>{
        ctx.body="todo zzc"
    })
    .get('/zza',async(ctx)=>{
        ctx.body="todo zza"
    } )

//父路由
let router = new Router();
//装载所有子路由
router.use('/home',home.routes(),home.allowedMethods());
router.use('/home',home.routes(),home.allowedMethods());

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('三千端口开始了');
})
