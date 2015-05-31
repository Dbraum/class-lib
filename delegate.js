//不要这样子做,这样会给每个li元素都添加事件监听（浪费）
$("ul li").click(function(){});

//这样只会添加一个事件监听
$("ul").delegate("li","click",function(){});


//delegate 类似实现

$.fn.delegate = function(target,events,callback){
    var element = $("ul") ;
    element.addEventListener(event,function(e){
        if(e.currentTarget.tagName === target){
            callback(arguments);
            return false ;
        }
    },false);
}