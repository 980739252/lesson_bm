#cookie 
name
value
Domain: cookie 生效的域名  baidu.com  map.baidu.com
Path  /a/b/c /a   /生效的路径
Expires/Max-Age 过期时间  默认就是当前session失效       
size
HttpOnly： cookie旨在http传输，js是无法操作的（cookie 可以有后端的set-cookie 响应头设置，也可以有前端 JS document.cookie设置）
secure：旨在https的环境下生效
cookie 只要符合domain+path 的生效范围 就会随着https请求juejin.im发送CSRF
sameSite： lax  strick）（cookie只在同域（juejin.im）生效）（ none
Priority        
