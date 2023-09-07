function Car(name, price) {
  this.name = name;
  this.price = price;
}
let alto = new Car("alto", "500000");
let Bmw = new Car("bmw", "0000000");
//console.log(alto);
//console.log(Car.prototype);///this is referencing the unanamed object that has no name it will be created whenever we create or define an function that could be refrenced by the "prototype" name
// we can add anything in this unnamed object by using "car.prototype"

Car.prototype.printInfo = function () {
  //Car.prototype is registering this function in unnamed objecrt
  console.log(` name:${this.name} price: ${this.price}`);
};
//console.log(Car.prototype); ///now we have added an function in the unnamed object that is from line no.10 to 12 Output of line no.13:{ printInfo: [Function (anonymous)] }
//now we want to try to call this function with the help of our object
//alto.printInfo();
Car.prototype.greeet = () => {
  console.log("greet to india from my depth of heart");
}; //Car.prototype is registering this function in unnamed objecrt
//now we are calling these two function
alto.__proto__.greet = () => {
  console.log("happy sunday");
};
alto.printInfo();
alto.greeet();
alto.greet();
Bmw.greet();
if (Car.prototype == alto.__proto__) {
  console.log("yes they are same it's for unnamed object");
} ///car.prototype and alto(it is an object).__proto__  both are refering same thing to unnamed object

if (Car.prototype.constructor == alto.__proto__.constructor) {
  console.log("yes they are same it's for function");
} // as we know that constructor is a unnamed object property that's why it's referring to the function so it's showing same in output.
