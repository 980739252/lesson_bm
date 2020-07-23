
import React from 'react'; 
import {Route,Redirect} from 'react-router-dom'
import authStore from './store/auth'
{/* <PrivateRoute path="/collect" component={Collect}/> */}
function PrivateRoute(){
     const isLogin= authStore.isLogin;
     //react.route
     const{path,component} = porps;
     if(!isLogin){
         return<Redirect to="/login"/>
     }
     return(
         <Route path={path} component/>
     )
}
export default PrivateRoute;