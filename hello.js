"use strict";
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
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // 显示当前的 step
//     alert(this.step);
//   },
// };
// let a = 10;
// a = 15;
// let b = a++;
// let c = "12";
// alert(b);
// alert(a + b);
// alert(a + c);
// let a1 = "okok";
// alert(`my name is ${a1 + "haode"}`);
// alert(typeof a1);
// let a2 = prompt("input your number", 90);
// let a3 = confirm("are you sure?");
// let b = 12;
// let c = "ok";
// b = String(b);
// c = Number(c);
// alert(typeof b);
// alert(typeof c);
// alert(c);
// let d = "10";
// let d1 = "12";
// alert(+d + +d1);
// let e = 10;
// let e1 = ++e;
// alert(e1); //11
// alert(e);//11
// let e2 = 10;
// let e3 = e2++;
// alert(e3); //10
// alert(e2);//11
// let aa = 2;
// let bb = 3;
// alert(aa * bb);//6
// alert(aa * bb++);//6
// alert(aa * ++bb); //此时bb=4，再自增给aa的是5，所以得10
// alert(aa * bb++);//10,自增后为6
// alert(aa * ++bb);//14
// alert(aa++);//2
// alert(++aa); //3
// let ab1 = 1;

// let ab2 = "1";
// alert(ab1 == ab2);
// alert(ab1 === ab2);
// let aa2 = "";
// let bb2 = "ok";
// let cc2 = 3;
// alert(aa2 < bb2);
// alert(aa2 < cc2);
// if (2 == 8) alert("OK");
// else alert("no");
// let a9 = +prompt("input", 90);
// let b9 = a9 < 20 ? "xiao" : a9 < 50 ? "zhong" : a9 < 90 ? "da" : "taida";
// alert(b9);
// let hour = +prompt("time", 9);
// if (hour < 8 || hour > 18 || hour == 16) {
//   alert("gun");
// } else {
//   alert("sban");
// }
kaishi: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (!input) break kaishi;
  }
}
