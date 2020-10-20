const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
  if(ctx.url==='/' && ctx.method==='GET'){
      //显示表单页面
      let html=`
       <h1>request POST</h1>
       <form method="POST" action="/">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>age</p>
          <input name="age"><br/>
          <button type="submit">submit</button>
       </form>
       `
       ctx.body=html;
       ;
  }else if(ctx.url==='/' && ctx.method==='POST'){
      ctx.body='接受到POST 参数';
  }else{
      ctx.body='<h2>404!<h2>';
  }
});

app.listen(3000,()=>{
    console.log('开始三千端口')
})