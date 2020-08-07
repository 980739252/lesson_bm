import{add,min,bar} from './math.js';
//bar 和 math.js是引用的关系
console.log(add(1,2));
console.log(bar);
setTimeout(()=>{
    console.log(bar)
},5000);

//tree-shaking: min 没有打包
//js:1.  没有模块化的 普通脚本文件
//   2. module  一个模块  