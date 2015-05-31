(function ($) {
    //构建对象关系映射（ORM）

    //可以通过给它添加自定义的函数和属性来增强基础数据的功能。比如添加数据的合法性验证，监听，数据持久化及服务器端的回调处理

    if (typeof Object.create !== "function") {
        Object.create = function (obj) {
            var F = function () {}
            F.prototype = obj;
            return new F();
        }
    }

    var Modal = {
        inherited: function () {},
        created: function () {},
        prototype: {
            init: function () {
            }
        },
        //create（）函数返回一个新类，这个对象继承自Modal对象，我们使用它来创建新模型
        create: function () {
            var object = Object.create(this);
            object.parent = this;
            object.prototype = object.fn = Object.create(this.prototype);

            object.created();

            this.inherited(object);
            return object;

        },

        //init函数返回一个实例，它继承自Modal.prototype，是Modal对象的一个实例
        init: function () {
            //实例当然是继承父类的prototype，继承哪个对象，就将该对象传入到Object.create，返回的对象就是满足需求的
            var instance = Object.create(this.prototype);
            instance.parent = this;
            //该方法定义在Modal.prototype
            instance.init.apply(instance, arguments);
            return instance;
        },

        /*demo
         * var Asset = Modal.create();
         * var User = Modal.create();
         *
         * var user = User.init();
         **/

        //通过extend 给Modal增加静态属性和方法
        extend : function(obj){
            var entended = obj.extended;

            $.extend(this,obj) ;
            if(entended){
                extended(this);
            }
        },

        //include 给Modal的实例增加属性和方法
        include:function(obj){
            var included = obj.included ;
            $.extend(thid.prototype,obj);
            if(included){
                included(this);
            }
        },

        /*demo
         * Modal.extend({
         *      find:function(){}
         * });
         * Modal.include({
         *      save:function(){},
         *      destory:function(){}
         * });
         **/

    };
})(Jquery);