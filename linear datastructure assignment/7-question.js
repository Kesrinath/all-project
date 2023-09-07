//Write a program to convert prefix expression to infix expression.?
function prefixToInfix(expression) {
  const stack = [];

  for (let i = expression.length - 1; i >= 0; i--) {
    const token = expression[i];

    if (isOperator(token)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpression = `(${operand1}${token}${operand2})`;
      stack.push(infixExpression);
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
const prefixExpression = "*+23-456";
const infixExpression = prefixToInfix(prefixExpression);
console.log(infixExpression);
