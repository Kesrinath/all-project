//Write a program to print the first non-repeated character from a string?
function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeated character is found
}

// Example usage:
const string = "abracadabra";
const firstNonRepeated = firstNonRepeatedChar(string);
console.log(firstNonRepeated);
