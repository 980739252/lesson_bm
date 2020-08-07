// import React,{useState, useEffect,useRef} from 'react';
// //


// export  const MyComponent =() =>{
//   const[message,setMessage]= useState("initial message");
//   const [seconds,setSeconds]= useState(0);
//   const secondsRef = React.useRef(seconds);
//   //闭包   
//   useEffect(()=>{
//     setTimeout(()=>{
//       console.log(seconds);
//       setSeconds(1);
//       secondsRef.current =1;
//     },1000);
    
//     setTimeout(()=>{
//       setMessage(`Total seConds:${secondsRef.current}`)
//     },2000)
    
//   },[])
//  return(
//    <>

//  <h4>{message}</h4> 
//  <h3>{seconds}</h3>
//  </>
//  )
// }

// import React, {useState,useRef, useEffect} from "react";
// export const MyComponent = () => {
//   const [visible, setVisible] = useState(false);
//   // mount unmount 
//   return (
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={() => setVisible(!visible)}>
//         Toggle Child component visibility: </button>
//     </>
//   )
// } 

// export const MyChildComponent = () => {
//   const [filter, setFilter] = useState("")
//   const [userCollection, setUserCollection] = useState([])
//   const mountedRef = useRef(false);
//   const setUserCollection = userCollection =>mountedRef.current 
//   && setUserCollection(userCollection)
//   useEffect(()=>{
//       mountedRef.current=true
//       return()=>(mountedRef.current =false)
//   })

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(
//         `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(response => response.json())
//         //no doing
         
//         .then(json => setSafeUserCollection(json))
//     }, 2500)
//   }, [filter])

//   return (
//     <div>
//       <input type="text" value={filter} 
//       onChange={e => setFilter(e.target.value)}
//       />
//       <ul>
//         {
//           userCollection.map((user, index) => (
//             <li key={index}>{user.name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

//数据在hooks里面怎么走的？
// 莱芜蓝丝绒

// useState -> context 轻量 | reducer 重 | uesReducer | mobx
import React, { useReducer } from "react";

const userInfoReducer = (state, action) => {
  switch(action.type) {
    case "setusername":
      return {
        ...state,
        name: action.payload
      }
    case "setlastname":
      return {
        ...state,
        lastname: action.payload
      }
    default:
        return state;
  }
}
export const MyComponent=()=>{
  const[reducer,dispatch]= useReducer(userInfoReducer,{
    name:"John",
    lastname:"Doe"
  })
  return(
    <>
       <h3>{reducer.name}{reducer.lastname}</h3>
       < EditUsername/>
       <input type="text" value={reducer.lastname}
       onChange={e=>dispatch({
         type:"setlastname",
         payload:e.target.value
       })}/>
    
    </>
  )
}
const EditUsername = React.memo(props=>{
  console.log("Hey skmadlasdadkmasmdammas,check React.memo")
  return(
    <input type="text"
           value={props.name}
           onChange={
             e=>props.dispatch({
               type:"setusername",
               payload:e.target.value
             })
           }
    />
  )
})