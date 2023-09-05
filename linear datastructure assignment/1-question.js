//Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairs(array, targetSum) {
  const pairs = [];
  const map = {};

  for (let num of array) {
    const complement = targetSum - num;

    if (map[complement]) {
      pairs.push([num, complement]);
    }

    map[num] = true;
  }

  return pairs;
}

// Example usage:
const array = [2, 4, 5, 3, 6, 8, 9];
const targetSum = 10;

const pairs = findPairs(array, targetSum);
console.log(pairs);
