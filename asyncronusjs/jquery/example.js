 /*let x = (function f1 (){
    let name = "Suraj";
    function f2 (){
        console.log("your name is " + name);
    };
    return f2;
})();
console.log(x);
x();

 let name = "Suraj";
function f1 (){
  let  name = "Aradhya";
    function f2 (){
    let name = "Sushma";
        console.log(name);
    }
    f2();
    console.log(name);
}
f1();
console.log(name);
*/
let obj = {
    name: "Suraj",
    country:"United Kingdom",
    print(){
        console.log('name ='+ this.name , 'and country = '+ this.country);
    }
}
let obj1 = {
    name: "Sunita",
    country: "india (uttar Pradesh)",
}
obj.print();
obj.print.call(obj1);
