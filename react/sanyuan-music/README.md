- router
 1
  react-router react-router-dom
  react-router-config
 2 react-router 嵌套
   config routes 配置一下清晰了

 当路由比较复杂时，传统的手写router/route配置难以维护，
 企业级的router配置方案reacr-route-config，清晰 可维护的routes/index.js配置
 layout app里总有几套皮肤，匹配那个级别的所有路由的
 routes  react-router-cngif





 - search  业务
    接口文档-
    - 热门搜索
      /search/hot
      参数为null
      返回值  result.hot
    - 搜索建议
      /suggest?keyword=
      参数 keyword 
      返回值：result.albums
    - 搜索结果
       /search?keyword