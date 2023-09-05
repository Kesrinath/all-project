function f1() {
  let x = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("suraj is good boy");
    }, 2000);
  });
  return x;
}

async function consumePromise() {
  let x = await f1();
  console.log(x);
  return "raju";
}
let x = consumePromise();
x.then(function (value) {
  console.log(value);
});
