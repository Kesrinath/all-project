//promise is an special js object it's give 100% gurentee to execute function or atleast throw an error it's remove inversion of control problem
// promises having three exection ststus 1-pending(pending state(it's  say you are not resolving immediately)) 2-resolve(it's sucessfully executed)3-rejected (it's thrwoing error tht can be resolved with catch())
function f1() {
  let x = new Promise(function (resolve, reject) {
    //resolve("suraj"); it's immediately resolving the value
    setTimeout(() => {
      resolve("suraj"); // it's not immediately resolving the value and it's showing Promise { <pending> }
    }, 2000);
    // reject(new Error("suraj"));// it's reject the promise that can only update with catch
  });
  return x;
}
let p1 = f1();
console.log(p1);
//.then method is used for getting resolve value
