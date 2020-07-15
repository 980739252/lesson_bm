#  作用域是什么


- react mvvm setState  state  状态机制
  变量  就是程序的状态 声明空间(闭包 作用域 变量查找 变量提升)   存储值
  值修改 
- 赋值的过程
  var a = 2 ; 他是怎么运行的？
  var关键字  a  indetifier  标识符  =  运算符   2  value  literal   

## 编译原理
   1. 高级语言 
     无法理解  无法执行
   2. 
## 编译原理
   语言执行的底层
   操作系统->编译原理
   引擎  v8  编译器  解译
   1. 分词/词法分析阶段
   [var,a,=,2];
   token   语法错误

   最后成为二进制文件  
   2. 语法分析阶段  
       语法树dom
       数据结构+算法
       编译器也是一段代码  运行
       HTML <div>div</div>DOM树；
      AST  Abstract SYntax  tree
   3. 代码生成
   JS        运行时编译
   JAVA C++  预编译
   编译器（compiler）
   解释器(Interpreter)

   JIT   


何为作用域  链？
   
   执行上下文
   函数是一等对象 
   每一个函数执行时，会先在自己的创建的AO对象上找对应属性值。
   AO 函数的管理层
   若找不到，则往父函数AO上这找，
   再找不到，再上一层的Ao，
   直到大boss  window（全局作用域）
   AO链     就是JavaScript中的作用域链

   AO上如果有函数同名的属性，则会此=才被覆盖
   

   编译阶段  AO生成
   比喻于propotype  原型链，

LHS和 RSH  都是出现在引擎对变量进行查询的时候 (v8引擎)
左查询   右查询发生了多少次

LHS：变量赋值或写入内存
     想象为将文本文件保存在硬盘中
RSH：变量查找 或从内存中读取 想象成从硬盘中打开文本文件
LHS RSH共同点
都会在所有作用域查询
严格模式下  找不到所需的变量，引擎会referenceerror异常
非严格模式下， LHS 会自动创建一个全局变量
查询成功后，如果对变量的进行不合理操作
typeerror      mac

   



