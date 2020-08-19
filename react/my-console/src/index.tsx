import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// let originConsole = console.log;//保存
// console.log =function(...args:any){//修改

//   originConsole.apply(window.console,args)//恢复
// }
// console.log(1);

// //如何监听数组push这个行为呢
// let arr=[1,2,3]
// arr.push(4)//发生了
// let originPush =  Array.prototype.push;
// Array.prototype.push = function(...items:any[]){
//   console.log('push called',items);

//   return  originPush.apply(this,items)
// }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
