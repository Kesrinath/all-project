class Animal {
  constructor(name, color, numberOfLegs, soundName, weight, speed) {
    this.name = name;
    this.color = color;
    this.numberOfLegs = numberOfLegs;
    this.soundName = soundName;
    this.weight = weight;
    this.speed = speed;
  }
  //method

  makeSound() {
    console.log(`${this.name} sound is ${this.soundName}`);
  }
  moveSpeed() {
    console.log(`${this.name} is moved with speed ${this.speed}`);
  }
}

let cow = new Animal("COw", "Black-white", 4, "wav....", 65, 30);
console.log(cow);
cow.makeSound();
cow.moveSpeed();

let dog = new Animal("Kutta", "Black-red", 4, "bhaww....", 35, 80);
console.log(dog);
dog.makeSound();
dog.moveSpeed();
