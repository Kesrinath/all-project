//Write a program to reverse a stack.
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
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
}

function reverseStack(stack) {
  const auxStack = new Stack();

  while (!stack.isEmpty()) {
    auxStack.push(stack.pop());
  }

  return auxStack;
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

const reversedStack = reverseStack(stack);

// Print the reversed stack
while (!reversedStack.isEmpty()) {
  console.log(reversedStack.pop());
}
