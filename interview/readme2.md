箭头函数：
  箭头函数和普通函数的区别
    1 语法更加简洁清晰
    2.箭头函数没有prototype(原型)，所以箭头函数本身是没有this的
     <!-- 箭头函数
       let a = () => {};
       console.log(a.prototype);  undefined
     普通函数
        function a() {};
        console.log(a.prototype);  {constructor:f} -->
    3. 箭头函数不会创建自己的this
       箭头函数没有自己的this，箭头函数的this指向在定义的是后继承外层第一个普通函数的this(指向父级作用域的this)，所以箭头函数的
       this指向在他被定义的时候就被定义了
       普通的函数this指向的是他的直接调用者
    4. call | apply | bind 无法改变箭头函数中this的指向  箭头函数的this在定义的时候就以及确定且永远不会改变。
    5 . 不能作为构造函数使用
         通过new命令来作为构造函数会保错，因为箭头函数没有构造原型这种说法，不存在prototype这个属性



2. let const
   块级作用域
   不存在变量提升
   暂时性死区
   不可重复声明
   声明的全局变量不会挂在顶层对象上面
   


