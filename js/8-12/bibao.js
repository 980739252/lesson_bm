var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  var unused = function () {
    if (originalThing) // 'originalThing'的引用
      console.log("嘿嘿嘿");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("哈哈哈");
    }
  };
};
setInterval(replaceThing, 1000);
//