class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  //method
  printInfo() {
    console.log(` name:${this.name} price: ${this.price}`);
  }
}
let x1 = new Car("marcities x1", "1000000000");

x1.printInfo();
