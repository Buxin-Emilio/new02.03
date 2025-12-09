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

delete user1.age; //age属性就没了，delete删除指令可以直接用。
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
let key0 = "likes birds";
user[key0] = true;
// 跟 user["likes birds"] = true; 一样
// []也可以这样用
let user7 = {
  name: "John", //字符串一定要加引号，不然访问不到
  age: 30,
};

let key = prompt("What do you want to know about the user7?", "name");
//这里加“”的name，其实是在访问属性名来得到值。加引号只是因为是字符串，数字那些不用
alert(user7[key]); // John（如果输入 "name"）这里其实是在对象user7里面访问key那里输入的
// []可以这样用，. 不行，会出现下面的。
let key2 = "name";
alert(user.key2); // undefined
// 计算属性
//方括号比点符号更强大。它允许写入任何属性名和变量
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
alert(bag["appleComputers"]);
//这个[]里面的就是计算属性，从fruit那里获得一个属性名字,[]里面的是字符串，一定一定要加引号‘’
//属性值简写
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

let user = makeUser("John", 30); //这里在创建对象，因为调用函数的时候，return的是对象，并且赋值给函数里面return的键值对的值。
alert(user.name); // John
//可以简写成这样
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age, // 与 age: age 相同
    // ...
  };
}
// 可以把属性名简写方式和正常方式混用
let user = {
  name, // 与 name:name 相同
  age: 30,
};
// 属性名称限制
//变量名不能是编程语言的某个保留字，如 “for”、“let”、“return” 等……但对象的属性名并不受此限制：
// 这些属性都没问题
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6
//属性命名没有限制，属性名可以是任何字符串，其他类型会被自动地转换为字符串。
// 当数字 0 被用作对象的属性的键时，会被转换为字符串 "0"
let obj1 = {
  0: "test", // 等同于 "0": "test"
};

// 都会输出相同的属性（数字 0 被转为字符串 "0"）
alert(obj1["0"]); // test
alert(obj1[0]); // test (相同的属性)
// 先记住，不能设置名为 __proto__ 的属性
//
//属性存在性测试，“in” 操作符
//相比于其他语言，JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错！

// 读取不存在的属性只会得到 undefined。所以我们可以很容易地判断一个属性是否存在
let user = {};

alert(user.noSuchProperty === undefined); // true 意思是没有这个属性

//或者用其他方式检查，比如用in
let user = { name: "John", age: 30 };

alert("age" in user); // true，user.age 存在
alert("blabla" in user); // false，user.blabla 不存在。
//in 的左边必须是 属性名。通常是一个带引号的字符串
// 如果我们省略引号，就意味着左边是一个变量，它应该包含要判断的实际属性名
let user = { age: 30 };

let key9 = "age";
alert(key9 in user); // true，属性 "age" 存在
// 假如属性值就是undefined，alert对象里面的属性的时候，容易误解，所以用in,只要返回trun，就代表值是存在的，并且就是undefined。
//
//
//for  in  循环
for (key in object) {
  // 对此对象属性中的每个键执行的代码
} //key就是对象里的每个属性，键值对的键，所以叫key
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // key这里的意思是创建名字叫key的变量，属于对象user的属性，也可以用其他名字来替代key，都行的。
  alert(key); // name, age, isAdmin
  // 属性键的值
  alert(user[key]); // John, 30, true
}
//
//
//对象里的属性排序
// 整数属性会被进行排序，其他属性则按照创建的顺序显示
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
//什么是整数属性，指的是一个可以在不做任何更改的情况下与一个整数进行相互转换的字符串，就是纯数字，没有其他符号，小数点等的字符串
// Number(...) 显式转换为数字
// Math.trunc 是内建的去除小数部分的方法。
alert(String(Math.trunc(Number("49")))); // "49"，相同，整数属性
alert(String(Math.trunc(Number("+49")))); // "49"，不同于 "+49" ⇒ 不是整数属性
alert(String(Math.trunc(Number("1.2")))); // "1"，不同于 "1.2" ⇒ 不是整数属性
// 如果属性名不是整数，那它们就按照创建时的顺序来排序
//如果想要给属性排名的时候，保持创建时的顺序，那就把数字属性添加点符号，变成非数字属性就可以了
// 比如把“20”变为“+20”.
//
//
//总结
// 属性的键必须是字符串或者 symbol（通常是字符串）。
// 值可以是任何类型

// 访问属性
// 点符号: obj.property。
// 方括号 obj["property"]，这个是属性名，方括号允许从变量中获取键，例如 obj[varWithKey] 这个是变量名
//
//作业，计算工资总和。
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
// 下面这一步是检验key是否在salario里面，true的话，开始运行循环，sum加key对应的值，循环到false为止，这个时候，sum已经加上所有值了
for (let key in salaries) {
  sum += salaries[key];
} //这里最好用[]来访问对象里面的属性，
alert(sum);
//记住typeof返回的是字符串，所以
if (typeof menu[key] == "number");
// 这样才是在检验值的类型
//还有，alert一般只接受一个参数，如果想要把对象里面的值都打印出来，那就这样。
let menu = {
  width: 200,
  height: 300,
  deep: 100,
  name1: "okok",
};
for (let key in menu) {
  if (typeof menu[key] == "number") {
    menu[key] *= 2;
  }
}
alert(menu.width + ", " + menu.height + ", " + menu.deep + ", " + menu.name1);
