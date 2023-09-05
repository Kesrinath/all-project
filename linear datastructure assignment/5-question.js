//Read about the Tower of Hanoi algorithm. Write a program to implement it?
/*Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod A. The objective of the puzzle is to move the entire stack to another rod (here considered C), obeying the following simple rules: 

1-Only one disk can be moved at a time.
2-Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
3-No disk may be placed on top of a smaller disk.*/
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    // Base case: Move the top disk from source to destination
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  // Move n-1 disks from source to auxiliary peg
  towerOfHanoi(n - 1, source, destination, auxiliary);

  // Move the largest disk from source to destination peg
  console.log(`Move disk ${n} from ${source} to ${destination}`);

  // Move the n-1 disks from auxiliary peg to destination peg
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const numDisks = 3;
const sourcePeg = "A";
const auxiliaryPeg = "B";
const destinationPeg = "C";

towerOfHanoi(numDisks, sourcePeg, auxiliaryPeg, destinationPeg);
