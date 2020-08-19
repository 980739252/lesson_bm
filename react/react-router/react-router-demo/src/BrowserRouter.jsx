import React from 'react';
const context = React.createContext();
class BrowserRouter extends React.Component{
    state={
       pathname:'/'
    }
    update=(path)=>{
        //强制更新一下
        this.setState(pathinfo)
    }
    render(){
        return(
            <context.Provider value={{pathname:this.state.pathname,update:this.update}}>
                {this.props.children}
            </context.Provider>
        )
    }
}