"use strict";
// 	程序中调试是测试，查找及减少 bug(错误)的过程。
// JavaScript 会忽略多余的空格。您可以向脚本添加空格，来提高其可读性。下面的两行代码是等效的：
var person = "runoob";
var person = "runoob";
// 多行注释以 /* 开始，以 */ 结尾，只要代码变成注释，就无法被执行。
// 声明变量要注意类型，赋值类型为字符串必须带‘’。
// 可以在声明变量的时候赋值，也能换行后赋值，变量未赋值时，默认值为 undefined
// 一个好的编程习惯是，在代码开始处，统一对需要的变量进行声明。
// 也可以同时给多个声明和给变量赋值,中间用逗号分开。
let num1 = 1,
  num2 = 2,
  num3 = 3,
  num4 = 4;
// 常用let来声明变量
// const用来声明常量，不变的量,声明之后就不能改了。
const num45 = 90;
// 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。
// 引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）

// 字符串，string。赋值要加引号，‘’  "" 都可以，并且字符串里面再加引号都行。
var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';

// Undefined 这个值表示变量不含有值。
// 可以通过将变量的值设置为 null 来清空变量。
//
//
//
// 对象
// JavaScript 对象是拥有属性和算法的数据
// 对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔。一个对象，就是一个变量，赋多个值而已，并且每个值，就像是一个变量。
var person = { firstname: "John", lastname: "Doe", id: 5566 };
let persona1 = { xin: "niang", ming: "feituo", nianLing: 18 };
// 访问函数属性
// 第一种方式，对象名称加. 访问对象里面的变量名
document.getElementById("#").innerHTML =
  person.firstname + "" + person.lastname;
// 第二种,加[ "对象的变量名之一。" ]
document.getElementById("#").innerHTML =
  person["firstname"] + "" + person["lastname"];
// 对象的算法，就是定义一个函数，作为对象的一个属性来储存。对象算法function那部分通过添加 () 调用 (作为一个函数)。。
let persona2 = {
  xing: "nan",
  bie: "nv",
  fullname: function () {
    return this.xing + " " + this.bie;
  },
};
document.getElementById("#").innerHTML = persona2.fullname();
// 不加括号输出函数表达式，加括号输出函数执行结果
