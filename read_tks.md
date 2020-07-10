 闭包


 function funcA(){
   let a =1;
   function  funcB() {
       a;
   }
   return  funcB;
 }

 let funcC = funcA();
 funcC()


