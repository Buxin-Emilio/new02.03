// function hello(name) {
//   let phrase = `hello,${name}`;
//   debugger;
//   say(phrase);
// }
// function say(phrase) {
//   alert(`** ${phrase}`);
// }

// let str = `
//   ECMA International's TC39 is a group of JavaScript developers,
//   implementers, academics, and more, collaborating with the community
//   to maintain and evolve the definition of JavaScript.
// `;
// alert(str);

// show(
//   parameters,
//   aligned, // 左边有 5 个空格
//   one,
//   after,
//   another
// );
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    // 检测 i 是否是一个质数（素数）
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
