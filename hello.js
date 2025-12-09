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
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);
