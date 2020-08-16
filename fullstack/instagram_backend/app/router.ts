import { Application } from 'egg';
// 约定俗成 egg.js 
export default (app: Application) => {
  const { controller, router } = app; // 1 controller router 
  // controller  url -> controller -> render view
  // 路由列表， nginx 服务器代理 ip http://www.baidu.com -> ip -> 
  // ngnix 80(负载均衡内网哪台机器)
  //  ->
  // 后端路由  / MVC Controller /  index.html  #root  /   /api
  // 前端路由  react   build  js 挂载 SPA  更快  useEffect -> reducer action-> 
  //   api -> 后台/api/user  /api 后端 吐数据的地方 

  // Egg.js 7001   
  router.get('/', controller.home.index);
  // 登录接口  /api/login
  router.get('/api/login', controller.login.index);

};
