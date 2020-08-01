import React from 'react';
import {HashRouter} from "react-router-dom"
import { GlobalStyle} from "./style"
import { IconStyle} from "./assets/iconfont/iconfont";
import { renderRoutes } from "react-router-config";//renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index'
// import { Provider } from 'react-redux';
// import  store from './store'


function App() {
  return (
   
    
      
      <HashRouter>  
       {/* 使用哈希路由处于多级路由时，不会将当前路由传入服务器，而BrowserRouter会 */}
         <IconStyle/>
         <GlobalStyle/> 
         { renderRoutes(routes)}
       </HashRouter>
      
      
  );
}

export default App;
