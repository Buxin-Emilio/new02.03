// 创建对象
let user3 = new Object(); // “构造函数” 的语法
let user4 = {}; // “字面量” 的语法
// 一个属性就是一个键值对,“key: value”，中间用的冒号，key就是一个字符串，相当于变量名，value就是值，可以赋任何值。
let user2 = {
  // 一个对象
  name: "John", // 键 "name"，值 "John"
  age: 30, // 键 "age"，值 30
};
// 键值对就是变量名加值的组合，中间冒号： 连接，对象，就相当于一个大盒子，里面装着很多小盒子，小盒子就是键值对，盒子封面就是键，盒子内容就是值，键值对，也称为对象里面的属性
//
// 访问对象里面的属性。
alert(user2.name); // John
alert(user2.age); // 30
// 特别注意一下，属性以键值对的形式出现，值如果是字符串，都需要加上引号'',不然访问的时候不会显示，然后，值可以是任何类型的

delete user1.age; //age属性就没有了，delete直接用。
// 也可以用多字词语来作为属性名，但必须给它们加上引号
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // 多词属性名必须加引号
};
// 列表中的最后一个属性应以逗号结尾
// 下面这样，在对象里面添加属性，用.
user1.xuexiao = "okok";
alert(user1.xuexiao);
// 但是不可以这样添加多词属性。不能用.   得换成[ ]
let user6 = {};
user6["likes birds"] = true;
alert(user6["likes birds"]); // true
delete user6["likes birds"];
// 方括号中的字符串要放在引号中，单引号或双引号都可以。
let user7 = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user7?", "name");

// 访问变量
alert(user7[key]); // John（如果输入 "name"）
