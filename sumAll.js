'use strict';
//?Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
  arr.sort((a, b) => a - b);
  const arrOfAllNumbers = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    arrOfAllNumbers.push(i);
  }

  return arrOfAllNumbers.reduce((acc, curr) => acc + curr);
}

sumAll([1, 4]);
sumAll([4, 1]);

console.log(sumAll([5, 10]));
