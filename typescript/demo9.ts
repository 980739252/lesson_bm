interface Girl{
    name:string;
    age:number;
    bust:number;
    waistline ?: number,//可有可无，有的话就显示
    [propname:string]:any;
    say():string
}
interface Teacher extends Girl{
    teach():string;
}
const girl={
    name:'小张',
    age:18,
    bust:94,
    sex:'女',
    say(){
        return "欢迎光临，黄鹤楼";
    }
    
}

class xiaozhanga implements Girl{
    name="小璐"
    age=17
    bust=98
    say(){
        return "再见"
    }
}
const screenResume=(girl:Girl)=>{
    girl.age<24 && girl.bust >=90&& console.log(girl.name+'进入面试')
  }