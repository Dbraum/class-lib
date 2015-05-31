//添加继承
var Class = function(parent){
    var klass = function(){
        this.init.apply(this,arguments);
    }
    //如果传入一个父类来创建新类
    //继承的本质或者做法，我的prototype指向父类实例就行
    if(parent){
        var subclass = function(){}
        subclass.prototype = parent.prototype ;
        klass.prototype = new subclass();
    }

    klass.fn = klass.prototype;

    klass.fn.init = function(){};
    //定义类的别名
    klass.fn.parent = klass;
    //通过extend 给类增加静态属性和方法
    klass.extend = function(obj){
        //obj可以带回调extented
        var extented = obj.extended ;

        for(var i in obj){
            klass[i] = obj[i] ;
        }

        if(extented){
            extented(klass);
        }
    }

    //include 给类的实例增加属性和方法
    klass.include = function(obj){
        //obj可以带回调extented
        var included = obj.include ;

        for(var i in obj){
            klass.fn[i] = obj[i] ;
        }

        if(included){
            included(klass);
        }
    }

    //添加一个proxy函数
    klass.proxy = function(func){
        var self = this ;
        var proxyFunc = function(){
            return func.apply(self,arguments);
        }

        return proxyFunc;
    };


    return klass;
}