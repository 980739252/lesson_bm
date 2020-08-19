import React from 'react';
import {context} from './BrowserRouter';
export default function Link(props){
    const update = ()=>useContext()
    const{ to,children}=props;
    const handleClick=(e)=>{
        e.preventDefault();
        window.history.pushState(null,null,to);
        //整个页面更新
        //。Context  存一份数据，
        update();
    }
    return (
    <a onClick={handleClick} href={to}>{children}</a>
    )
}