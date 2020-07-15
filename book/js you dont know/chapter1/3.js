// LHS  RHS    变量查找  ，就在哪一行相关
function foo(a){
    var b=a//LSH
    return a+b;//RSH
}

//left hand search
var c=foo(2);// LSH RSH

// LHS:c=...  a=2   b=
// RHS： return a+b  a.  b.
//第三行 var b= a   a.
//foo   