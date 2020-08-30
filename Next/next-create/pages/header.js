import Head from 'next/head'
import {Button} from 'antd'
//Next.js css import style jsx
//babel-plugin-import
function Header(){
    return(
        <>
        <Head>
            <title>jspang我们</title>
            <meta charSet="utf-8"/> 
        </Head>
        <div>jspang.com</div>
        <div><Button>我是按钮</Button></div>
        </>
        
    )
}
export default Header