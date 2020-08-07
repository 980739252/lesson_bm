const {done, obj} = require('./comm1');
console.log(done);
console.log(obj);
//let done = comm1.done;
//let obj = comm1.obj;  引用
setTimeout(()=>{
console.log(obj)
console.log(done);
},5000)
































