function reduce(arr,reduceCallback,initialValue){
    //1.参数的校验
    if(!Array.isArray(arr) ||!arr.length || 
    typeof reduceCallback!=='function'){
       return[];
    }else{
        //initialValue  0  1
        let  hasInitialValue = initialValue !==undefined;
        //分布法 定义变量
        let value = hasInitialValue?initialValue:arr[0];
        for(let i=hasInitialValue?0:1;i<arr.length;i++){
            value=reduceCallback(value,arr[i],i,arr);
        }
        return value;
        //reduceCallback fn 四个能力
        // initialValue  false  少执行一次？

        // for
        // // reduceCallback 怎么合并
        // let  value;
        // return  value;


    }
}
reduce([1,2,3],function(pre,cur,index,arr){
    return  pre+cur

})
//Array.prototype.reduceceFn