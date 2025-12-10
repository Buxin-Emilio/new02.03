// let user1 = { mz: "xiao", xb: "nan", nl: 10, age: true, name1: "a" };
// alert(user1.mz);
// alert(user1.age);
// delete user1.xb;
// alert(user1.xb); //没有了，undefined
// user1.xuexiao = "okok";
// alert(user1.xuexiao);
// let shabi = {
//   mzi: "okok",
//   xbie: "nan",
//   xuexxiao: "daxue",
// };
// let key = prompt("shuru", 9);
// alert(shabi[key]);
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit + "Computers"]: 5, // bag.appleComputers = 5
// };
// alert(bag["appleComputers"]);
// let user = {
//   name: "john",
//   surname: "smith",
// };
// user.othername = "jack";
// user.name = "athur";
// delete user.surname;
// alert(user.name);
// function isEmpty(kong) {
//   for (let jiancha in kong) {
//     return false;
//   }
//   return true;
// }
// let kong = {};
// isEmpty();
// alert(isEmpty());
// let salaries = {};
// let sum = [salaries.John + salaries.Ann + salaries.Pete];
// alert(sum);
// 上面这个不行，因为对象为空的时候，返回的是NaN.

// let salaries = {
//   xh: 90,
//   xm: 88,
// };
// let sum = 0;
// for (let mz in salaries) {
//   sum += salaries[mz];
// }
// // alert(sum);
// let menu = {
//   width: 200,
//   height: 300,
//   deep: 100,
//   name1: "okok",
// };
// for (let key in menu) {
//   if (typeof menu[key] == "number") {
//     menu[key] *= 2;
//   }
// }
// alert(menu.width + ", " + menu.height + ", " + menu.deep + ", " + menu.name1);
// let user1 = {
//   name1: "John",
//   age: 30,
// };
// let clone = {};
// Object.assign(clone, user1);
// alert(clone.age);
// let user3 = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// Object.assign(user3, permissions1, permissions2);
// alert(user3.canEdit);
// let user4 = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };
// alert(user4.sizes.height); // 182
// let clone = Object.assign({}, user4);

// alert(user4.sizes === clone.sizes); // true，同一个对象

// // user 和 clone 分享同一个 sizes
// user4.sizes.width++; // 通过其中一个改变属性值
// alert(clone.sizes.width);
////////////
// let calculator = {
//   read() {
//     this.a = +prompt("input a", 9);
//     this.b = +prompt("input b", 8);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // 显示当前的 step
    alert(this.step);
  },
};
