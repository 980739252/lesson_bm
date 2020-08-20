//函数和构造函数  即统一又分离
const Person = function(name){
    this.name=name;
    // return 1;会被类型检查忽略,如果返回是个对象的话
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
const person = new Person('Tony');
console.log(person.name);
console.log(person.sayName);
console.log(persoon instanceof Person)