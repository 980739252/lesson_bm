import React from 'react';
export default class Order extends React.Component{
    childRef=React.createRef()
    parentRef=React.createRef()
    child=()=>{
        console.log(1)
        // e.stopPropagation()
    }
    parent=()=>{
        console.log(2)
    }
    componentDidMount(){
        //自动判断哪一个Dom节点的回调该被执行
        document.addEventListener('click',()=>{
            console.log('document');
        })

        this.childRef.current.addEventListener('click',()=>{
            console.log('child')
        })
        this.parentRef.current.addEventListener('click',()=>{
            console.log('parent')
        })
        const elements= (
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        
        )
        console.log(elements);dengde
    }
    render(){
        return(
              <div onClick={this.parent} ref={this.parentRef}>
            <div onClick={this.child} ref={this.childRef}>
                child
            </div>
        </div>
        )
      
    }
}