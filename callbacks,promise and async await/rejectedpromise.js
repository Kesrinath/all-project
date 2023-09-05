function f1() {
  let x = new Promise(function (resolve, reject) {
    reject("suraj your order is out of stock"); // it's reject the promise that can only update with catch
  });
  return x;
}
let p1 = f1();
//console.log(p1);
p1.then(function (value) {
  console.log(value);
}).catch(function (value) {
  console.log(value);
});
//promises are also having the confusion problem(in consuming part not in cretion part much) in syntactically.that's why in 2015 there are introduced async and await methods
