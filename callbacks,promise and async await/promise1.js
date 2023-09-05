// consuming the resolved value by using callback function
function f1() {
  let x = new Promise(function (resolve, reject) {
    //resolve("suraj");
    setTimeout(() => {
      resolve("suraj"); // it's not immediately resolving the value and it's showing Promise { <pending> }
    }, 2000); //it's immediately resolving the value
  });
  return x;
}
let p1 = f1();
console.log(p1); //it's console only promise with resolve value
//.then method is used for getting resolve value
let x = p1.then(function (value) {
  console.log(value); ///this is giving the resolved vlaue
  return "RajKumar"; // if it's not return then it's showing undefined in line no.21
});
///for setTime out resolved value for line no 12 Promise { <pending> } and for line no. 15 which gives resolved value that is Suraj,  .then is wait for the resolved value when once it's resolved then callback function is called
console.log("line no: 18", x);
x.then(function (value) {
  console.log("line no : 20 ", value);
});

// when you doesn't return any value then bydefault it will be undefined
///promise is acts as future placeholder value for example for a order in resutorant order then it's order no. or recipt no.or token number.
