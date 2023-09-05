//Write a program to reverse an array in place? (In place means you cannot create a new array. You have to update the original array.0
function reverseArrayInPlace(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    // Swap elements at left and right indices
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  return array;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);
