// //构造函数在技术上是常规函数。不过有两个约定：
// 它们的命名以大写字母开头。
// 它们只能由 "new" 操作符来执行
//构造器的主要目的 —— 实现可重用的对象创建代码
______________________________;
//当一个函数被使用 new 操作符执行时，它按照以下步骤：
// （一个新的空对象）被创建并分配给 this。
// 函数体执行。通常它会修改 this，为其添加新的属性。下面的例子就是jack被赋值给this了，然后返回给新的刚刚把函数当数据使用，当成值来保存的对象里面了。
// 返回 this 的值，创建新对象成功，并且已经添加属性，和函数里面的一样，只不过参数的值是新的。

//注意看，函数名首字母大写
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name1 = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
let user = new User("Jack");
//这里就是创建新对象，赋新值给this的参数。
alert(user.name1); // Jack
alert(user.isAdmin); // false

// 调用函数的那一步，对于直接创建了一个这个
// let user = {
//   name: "Jack",
//   isAdmin: false
// };
//注意一下，创建新user对象的时候，User（）里面赋值给的是相同名字的值，不是键，不是参数名。
//函数名首字母大写就是代表着要被new搭配着使用。
//
//
//new function() { … }
// 创建一个函数并立即使用 new 调用它
let user2 = new (function () {
  this.name = "John";
  this.isAdmin = false;
})();
// 这种局部创建的函数，不能被再次调用，

_________________________;

//构造器的 return，构造器没有 return 语句，构造器的任务是把值写入this里面，但是，假如return返回的是一个对象，那就返回这个对象的所有参数给新对象，哪怕创建新对象的时候，有赋值给this，也不管用了，只要return里面的
function User(name1) {
  this.nima = "woc";
  this.admin = name1;
  return { admin: "xinmz", nima: "nbi" };
}
let user3 = new User("john");
alert(user.nima); //nbi
alert(user.admin); //xinmz
//但是如果return后面跟的不是对象，或者空值，那就忽略return的，只管this的，上面的例子就会返回woc和john
_____________________________;

//构造器里面的方法

function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
_____________________________;
//作业
//创建构造器，使两个对象全等
//要让两个对象的参数都来自同一个对象才行，那就构造一个构造器，里面只return一个对象，
let one = {};
function A() {
  return one;
}
function B() {
  return one;
}
alert(new A() == new B());
//总结一下，构造器就是，把正常的函数，里面的函数名前加this，让新创建的函数可以直接现买现卖构造器里面的功能。
//现在构建计算器构造器
//作业每天重新写
