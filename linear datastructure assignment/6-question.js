//Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
/*In programming, mathematical expressions can be represented in different notations, such as infix, prefix, and postfix. Let's first understand these notations:

Infix Notation:
In infix notation, the operator is placed between the operands. It is the most commonly used notation in mathematics. For example: 2 + 3.

Prefix Notation (also known as Polish Notation):
In prefix notation, the operator is placed before the operands. For example: + 2 3.

Postfix Notation (also known as Reverse Polish Notation):
In postfix notation, the operator is placed after the operands. For example: 2 3 +.*/

//To convert a postfix expression to a prefix expression, you can use a stack data structure. Here's a program in JavaScript that performs this conversion:

function postfixToPrefix(expression) {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const token = expression[i];

    if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefixExpression = token + operand1 + operand2;
      stack.push(prefixExpression);
    } else {
      stack.push(token);
    }
  }

  return stack.pop();
}

function isOperator(token) {
  const operators = "+-*/%^";
  return operators.includes(token);
}

// Example usage:
const postfixExpression = "23+4*";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log(prefixExpression);
