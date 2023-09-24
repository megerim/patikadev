const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {

if(ctx.url === '/'){
    ctx.body = '<h1>Index Sayfası</h1>';
}else if(ctx.url === '/hakkimda'){
    ctx.body = '<h1>Hakkımda Sayfası</h1>';
}else if(ctx.url === '/iletisim'){
    ctx.body = '<h1>İletişim Sayfası</h1>';
}
});

app.listen(3000);