//使用apply来包装指定this指向对象
var proxy = function(func,thisObj){
    var proxyFunc = function(){
        return func.apply(thisObj,arguments);
    }

    return proxyFunc;
}