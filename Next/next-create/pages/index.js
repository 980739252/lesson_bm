import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { route } from 'next/dist/next-server/server/router'


const Home=()=>{
    //routeChangeStart
    //routeChangeComplete
    //beforeHistoryChange
    //routerChangeError
    //hashChangeStart
    //hashChangeComplete
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1.routeChangeStart->路由开始变化,参数为：',...args)
    })
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('2.routeChangeComplete->路由变化结束,参数为：',...args)
    })
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('3 .beforeHistoryChange->路由变化结束,参数为：',...args)
    })
    Router.events.on('routerChangeError',(...args)=>{
        console.log('4 .routerChangeError->路由变化结束,参数为：',...args)
    })
    Router.events.on('hashChangeStart',(...args)=>{
        console.log('5.hashChangeStart->路由开始变化,参数为：',...args)
    })
    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6.hashChangeComplete->路由变化结束,参数为：',...args)
    })
    //Lazy Loading   模块moment  组件
   function gotoxioajiejie(){
       Router.push('/xiaojiejie?name=结衣')
   }
//    function gotoxioajiejie(){
//     Router.push({
//         pathname:'/xiaojiejie',
//         query:{name:'结衣'}
//     })
// }
   return(
      <>
    <div>我是首页</div>
       <div>
           <Link href="/xiaojiejie?name=结衣"><a >选择结衣</a></Link>
          <br/> <Link href={{pathname:'xiaojiejie',query:{name:'井空'}}}><a >选择井空</a></Link>
       </div>
       <div>
           <button onClick={gotoxioajiejie}>选结衣</button>
       </div>
       <div>
           <Link href="#jspang"><a >选技术胖</a></Link>
       </div>
    </>  
   )
}
   

export default Home