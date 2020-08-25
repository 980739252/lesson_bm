function Jspang(){
    const [color,setColor]=React.useState('blue')
    const changeColor=()=>{
        setColor(color==='blue'?'red':'blue')
    }
    return(
        <>
        <div >哈哈哈哈哈哈哈哈哈</div>
        <div><button onClick={changeColor}>改变颜色</button></div>
        <style jsx>
                {
                    `
                    div{color:${color};}
                   
                    `
                }
        </style>
        </>
    )
}
export default Jspang