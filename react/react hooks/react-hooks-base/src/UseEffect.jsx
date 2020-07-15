import React,{useEffect,useState,
useMemo,useCallback
} from 'react' 
// state={
//     a:1,
//     a:2
// }
let arr= [1,2]

function  Demo(){
 const[inputVal,setVal]=useState('海阔天空');
 const[list,setList] = useState([]);
 //const [val,setVal]= ['',()=>{}]
 const  val = useMemo(() => arr);
 const handleChange = useCallback((event)=>{
     setVal(event.target.value);
 })
 useEffect(() => {
     fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA' +inputVal)
     .then(res => res.json())
     .then((res)=>{
         setList(res.result.songs);
     })
     return () =>{
        //卸载
        //  clearInterval()
        //  document.removeEventListener()
     }
 },[imputVal]);
 //依赖 react 检查 依赖里面有没有数据发生变化，没变化就不会重新调用
 //[]   一次  componentdidMopunt
 //[inputVal]  多次  componentDidUpdate
    return(
        <div>
            {list.length}
            <import type="text" value={} onChange={handleChange}/>
        </div>
    )
}

export default  Demo