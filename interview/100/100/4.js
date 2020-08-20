//从面向对象聊到继承?
 // Object.create()//????////
 const person = {
     isHuman:false,
     printIntroduction:function(){
         console.log(`My name is ${this.name}.Am I human?${this.isHuman}`)
     }
 };
//  最简单的继承方案 
// const zhangboy = Object.create(person);
// zhangboy.name = 'ykykyyk';
// zhangboy.isHuman = true;
// zhangboy.printIntroduction();
// console.log(zhangboy._proto_);
// console.log(zhangboy._proto_===Object.prototype);
const zhangboy = Object.create(null);
zhangboy.name = 'ykykyyk';
zhangboy.isHuman = true;
zhangboy.printIntroduction();
console.log(zhangboy._proto_);
console.log(zhangboy._proto_===Object.prototype);


  