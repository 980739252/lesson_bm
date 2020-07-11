function throttled(func,wait){
    var  previous = 0;
    var time = null;
    return function(){
        var now1 = new Date()
        //修正了timeout的时间间隔
        var now =now1.getTime()
        const remain = wait-(now - previous)
        if(now-previous>wait){
            func();
            previous = now;
        }else if(!time){
            time = setTimeout(()=>{
                 func();
                 time =null;
            },remain);
        }
    }
}

Date.prototype.getTime()