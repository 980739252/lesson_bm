let count:number=1;
//不仅不可改变，而且还会继承number
interface Xiaojiejie{
    name:string,
    age:number
}
const xiaohong:Xiaojiejie={
    name:'小红',
    age:18
}
console.log(xiaohong.age)
