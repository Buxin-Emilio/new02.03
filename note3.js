//可达性（Reachability）
// “可达”值是那些以某种方式可访问或可用的值。它们被存储在内存中。
//比如，当前执行的函数，它的局部变量和参数。 当前嵌套调用链上的其他函数、它们的局部变量和参数。 全局变量，（还有一些其他的，内部实现）
//这些值被称作 根（roots）。
//如果一个值可以从根通过引用或者引用链进行访问，则认为该值是可达的，比方说，如果全局变量中有一个对象，并且该对象有一个属性引用了另一个对象，则 该 对象被认为是可达的。而且它引用的内容也是可达的
//垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
// 当对象是可达状态时，它一定是存在于内存中的。
//当变量或者对象的属性或者值被改了，那之前的就没了，无法访问，不可达
//除非对象或者变量被复制，让对象是可以通过其他路径来访问，那还是可达的，除非其他路径也被改了
/////////////////////////
// 相互关联的对象

/////////////////////////////
// 对象方法 this
let user = {
  name: "John",
  age: 30,
};
user.sayHi = function () {
  alert("Hello!");
};
user.sayHi(); // Hello!
//sayhi函数其实是变成了user的属性之一。
//作为对象属性的函数被称为 方法，我称之为算法或者程序都行，就是实现功能的属性
// 也可以先创建对象，创建函数，然后再把函数添加给对象，作为方法保存。
let user = {
  // ...
};
// 首先，声明函数
function sayHi() {
  alert("Hello!");
}
// 然后将其作为一个方法添加
user.sayHi = sayHi;
user.sayHi(); // Hello!
/////////////////////
//简写给对象创建方法属性
user = {
  sayHi: function () {
    alert("Hello");
  },
};
// 更好的方法简写
let user = {
  sayHi() {
    // 与 "sayHi: function(){...}" 一样
    alert("Hello");
  },
};
//可以省略 "function"，只写 sayHi()
//就好比（）就是function的意思
///////////////
//通常，对象方法需要访问对象中存储的信息才能完成其工作，所以用this
// this 的值就是在点之前的这个对象，即调用该方法的对象
let user = {
  name: "John",
  age: 30,
  sayHi() {
    // "this" 指的是“当前的对象”
    alert(this.name);
  },
};
user.sayHi(); // John
////注意，这里访问对象的方法时，用.  然后方法所代表的函数要加（），才代表是函数。

//最好是用this，不要在对象内直接使用对象里面的属性名，不然克隆到其他地方之后，会出错。

//this 的值是在代码运行时计算出来的，它取决于代码上下文
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// 在两个对象中使用相同的函数
user.f = sayHi;
admin.f = sayHi;

// 这两个调用有不同的 this 值
// 函数内部的 "this" 是“点符号前面”的那个对象
user.f(); // John（this == user）
admin.f(); // Admin（this == admin）

admin["f"](); // Admin（使用点符号或方括号语法来访问这个方法，都没有关系。）

//////////////
//在没有对象的情况下调用：this == undefined
function sayHi() {
  alert(this);
}

sayHi(); // undefined

//箭头函数有些特别：它们没有自己的 this。如果我们在这样的函数中引用 this，this 值取决于外部“正常的”函数。

//存储在对象属性中的函数被称为“方法”。
// 方法允许对象进行像 object.doSomething() 这样的“操作”。
// 方法可以将对象引用为 this。

//任务

/////////////////////////
//简单计算机，卧槽，不轻松
let calculator = {
  read() {
    this.a = +prompt("input a", 9);
    this.b = +prompt("input b", 8);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
