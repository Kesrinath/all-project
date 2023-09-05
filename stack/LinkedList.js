class Node {
  constructor(value) {
    this.value = null;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    thia.tail = null;
  }

  append(value) {
    let newNode = new Node(value);
    //checking node is empty if yes then append value with the help of updating the value in this head will poin
    if (this.head !== null && this.tail !== null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // it's updating tail by taking value of newnode
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}
