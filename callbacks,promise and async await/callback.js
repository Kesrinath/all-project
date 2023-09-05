function f1(name, x) {
  // parameter x is taking function
  console.log("my name is : ", name);
  //console.log("line no ==> 3", x);
  let z = x("happy sunday"); // x is simply function that is define as callback in f1 function
  console.log("z is : ", z);
}

f1("Suraj", function (greet) {
  console.log("how are you");
  console.log(greet); // it's catch from x fuction
  return "kanchan"; //returning this name that will catch at it's calling time
});
