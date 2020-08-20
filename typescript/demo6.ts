//typescript 数组类型注解的方法
const numberArr =[1,2,3]
const numberArr2:number[]=[1,2,3]
const stringArr :string[] = ['a','ds']

const undfinedArr: undefined[] =[undefined,undefined]
const arr:(number|string)[] =[1,'string',2]
//type alias 类型别名
type Lady ={name:string,age:number}
class Madam{
    name:string;
    age:number;
}
const xiaojiejiess :{name:string,age:number}[]=
[
    {name:'小红',age:18},
    {name:'小周',age:17}
]

