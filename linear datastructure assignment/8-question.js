//Write a program to check if all the brackets are closed in a given code snippet.?
function checkBrackets(code) {
  const stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket =
        openingBrackets[closingBrackets.indexOf(char)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
const codeSnippet = "function add(a, b) { return a + b; }";
const bracketsAreClosed = checkBrackets(codeSnippet);
console.log(bracketsAreClosed);
