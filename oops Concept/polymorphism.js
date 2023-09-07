//override in polymorphism
class Parent {
  constructor() {}
  f1() {
    console.log("parent is invoked");
  }
}
class Child extends Parent {
  constructor() {
    super();
  }
  f1() {
    console.log("child is invoked");
  }
}

let s = new Child();
s.f1();

// overriding is mechanism in which we override the parent method by different definition of same function in child class
