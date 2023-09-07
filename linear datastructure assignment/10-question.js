//Write a program to find the smallest number using a stack.?
class Stack {
  constructor() {
    this.items = [];
    this.minStack = []; // Auxiliary stack to track the minimum element
  }

  push(element) {
    this.items.push(element);

    // Update the minimum stack
    if (
      this.minStack.length === 0 ||
      element <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(element);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedElement = this.items.pop();

    // Update the minimum stack if the popped element is the current minimum
    if (poppedElement === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return poppedElement;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  getMinimum() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);
const minimum = stack.getMinimum();
console.log("Minimum element:", minimum);
