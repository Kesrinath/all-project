//Write a program to check if two strings are a rotation of each other?
function areRotations(str1, str2) {
  // Check if both strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }

  const concatenatedStr = str1 + str1;

  // Check if str2 is a substring of the concatenated string
  if (concatenatedStr.includes(str2)) {
    return true;
  }

  return false;
}

// Example usage:
const string1 = "rotation";
const string2 = "tionrota";

const result = areRotations(string1, string2);
console.log(result);
