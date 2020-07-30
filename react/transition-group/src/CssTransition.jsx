import React from 'reacrt';
import{CSSTransition} from  'react-transition-group';
function demo(){
    const [isIn,setIsIn]
    return(
        <>
        <CSSTransition timeout={2000}
        classNames="msg"
        in={isIn}>
        <div className="box"></div>
        </CSSTransition>
        <button onClick={()=>{setIsIn(!isIn)}}>toggle</button>
        </>
    )
}