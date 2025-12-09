// 对象和各种原始类型的数据的区别是什么:对象是“通过引用”存储和复制的，而原始类型：字符串、数字、布尔值等 —— 总是“作为一个整体”复制。
//就好比一箱牛奶，对象是一整箱，而原始类型只是一小盒。
// 复制或者引用对象的一个属性的时候，并不是把整个对象都复制了，拿一盒牛奶不是一箱。
let user = { name: "John" };
let admin = user;
admin.name = "Pete"; // 通过 "admin" 引用来修改
alert(user.name); // 'Pete'，被修改后能通过 "user" 引用看到，就好像是换了一盒牛奶，但整体的大盒子不变。

//仅当两个对象为同一对象时，两者才相等
let a = {};
let b = a; // 复制引用

alert(a == b); // true，都引用同一对象
alert(a === b); // true
//
// 这里两个独立的对象则并不相等，即使它们看起来很像（都为空）
let a1 = {};
let b1 = {}; // 两个独立的对象

alert(a1 == b1); // false

//浅克隆与合并，Object.assign
//如果是克隆对象，克隆后，要确保原始对象的属性不会被跟着改动，就好比买一箱一样的牛奶，然后随意改动里面的牛奶，原始的那箱不会变化。
let user1 = {
  name: "John",
  age: 30,
};
let clone = {}; // 新的空对象
// 将 user 中所有的属性拷贝到其中
for (let key in user1) {
  clone[key] = user1[key];
}
// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据
alert(user1.name); // 原来的对象中的 name 属性依然是 John

//上面的方法是比较原始的
//可以用Object.assign 来克隆
Object.assign(dest1, dest2, dest3);
// dest是目标对象，src是按需求去克隆的源对象，克隆的源大盒子们。这样的话，可以克隆或多个源对象里面的所有属性。
let user2 = {
  name1: "John",
  age: 30,
};
let clone = {};
Object.assign(clone, user2);
alert(clone["name1"]);
alert(clone.age);
//这里再三提醒，一定要加‘’，因为属性的名字是字符串，不是一个变量。要访问就得加引号,或者就别用[],直接用.来访问属性。
////////////////////////
//克隆多个对象
let user3 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user3, permissions1, permissions2);
alert(user3.canEdit);
// 现在 user = { name: "John", canView: true, canEdit: true }
////////////////////////
//如果被拷贝的属性的属性名已经存在，那么它会被覆盖：
let user6 = { name: "John" };

Object.assign(user, { name: "Pete" }); //如果源对象里面的属性和目标对象里面的重复了，那就被源对象的，也就是被克隆对象的属性值覆盖

alert(user6.name); // 现在 user = { name: "Pete" }
////////////////////
//Object.assign 代替 for..in 循环来进行简单克隆
let user5 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user5);

/////////// 深层克隆
let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  }, //没想到吧，对象的属性也能是对象
};
alert(user4.sizes.height); // 182
let clone = Object.assign({}, user4);

alert(user4.sizes === clone.sizes); // true，同一个对象

// user 和 clone 分享同一个 sizes
user4.sizes.width++; // 通过其中一个改变属性值
alert(clone.sizes.width); // 51，能从另外一个获取到变更后的结果
// 下面这样拷贝 clone.sizes = user.sizes 已经不足够了，因为 user.sizes 是个对象，它会以引用形式被拷贝。因此 clone 和 user 会共用一个 sizes：
//所以深拷贝，还得用其他方法实现，比如递归，之后学。

////////////////////////
//使用 const 声明的对象也是可以被修改的,只有当const声明的是普通的变量，才不可以修改，对象里面的属性可以。
const user7 = {
  name: "John",
};

user7.name = "Pete"; // (*)

alert(user7.name); // Pete

//////
//总结
//对象通过引用被赋值和拷贝。换句话说，一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）。因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。
//这里说的变量，其实也是指创建的对象，这种非常规变量。

// 所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。

// 为了创建“真正的拷贝”（一个克隆），我们可以使用 Object.assign 来做所谓的“浅拷贝”（嵌套对象被通过引用进行拷贝）或者使用“深拷贝”函数，例如 _.cloneDeep(obj)。

//一个变量（如 let user1 或 const myObject）是内存中一个命名地址，这个地址直接指向了它所存储的值
// 如果值是基本类型（number、string、boolean、null、undefined、symbol、bigint），变量直接存储这个值
//如果值是非基本类型（对象、数组、函数），变量存储的则是这个对象在内存中的地址（即引用）。

// 当执行 let clone = user1; 时，user1 变量中存储的那个内存地址被完整地复制给了 clone 变量。这就是“拷贝引用”。
