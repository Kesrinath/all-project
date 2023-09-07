class Person {
  constructor(name, age, isMarrid) {
    this.name = name;
    this.age = age;
    this.isMarrid = isMarrid;
  }
  printBasicInfo() {
    console.log(
      `Name: ${this.name} --- age: ${this.age} --- is Marrid: ${this.isMarrid}`
    );
  }
}
class Student extends Person {
  // inheriting from parent class by using extends keyword
  constructor(name, age, isMarrid, roll, school) {
    super(name, age, isMarrid); // calling parent constructor
    this.roll = roll;
    this.school = school;
  }
  printDetailsInfo() {
    console.log(
      `Name: ${this.name} --- age: --- ${this.age} --- is Marrid: ${this.isMarrid} --- role: ${this.roll} --- school: ${this.school}`
    );
  }
}
class Employee extends Student {
  constructor(name, age, isMarrid, roll, school, salary) {
    //it's inherit both parent class
    super(name, age, isMarrid, roll, school);
    this.salary = salary;
  }
  printEmployeeDetails() {
    console.log(
      `Name: ${this.name} --- age: ${this.age} --- is Marrid: ${this.isMarrid} --- role: ${this.roll} --- school: ${this.school} --- salary: ${this.salary} `
    );
  }
}

let aman = new Student("Suraj", 22, false, 36, "RM college");
aman.printBasicInfo();
aman.printDetailsInfo();

let sita = new Person("Ram", 27, true);
sita.printBasicInfo();
//sita.printDetailsInfo();//parent can't acess child method

let Radha = new Employee("Krishna", 28, true, 54, "RM college", 60000);
Radha.printEmployeeDetails();
