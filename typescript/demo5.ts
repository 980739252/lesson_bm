//ts函数参数和返回类型定义
// function getTotal(one:number, two:number){
//     return one+two
// }
// const total:number = getTotal(1,2)
function sayHello() : void{
    console.log('hello world')
}
function errorfunction() : never{
     throw new Error()
     console.log('hello world')
}
function forNever() : never{
   while(true){}
   console.log('hello world')
}
function add({one,two}:{one:number,two:number}){
    return one+two
}
const total = add({one:1,two:2})

function getNumber({one}:{one:number}){
    return one
}
const one = getNumber({one:1})