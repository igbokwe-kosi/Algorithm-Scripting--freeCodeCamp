'use strict';

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   let arrLong, arrShort;

//   if (arr1.length > arr2.length) {
//     arrLong = [...arr1];
//     arrShort = [...arr2];
//   }
//   if (arr1.length < arr2.length) {
//     arrLong = [...arr2];
//     arrShort = [...arr1];
//   }

//   for (let i = 0; i < arrLong.length; i++) {
//     const current = arrLong[i];
//     console.log(current);
//     let count = 0;
//     for (let j = 0; j < arrShort.length; j++) {
//       console.log(current, arrLong[j]);
//       if (current === arrShort[j]) {
//         count++;
//         console.log('count:' + count);
//       }
//     }
//     count === 0 ? newArr.push(current) : (count = 0);
//   }
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//   const arr = [...arr1, ...arr2];
//   let copiesFound = 0;
//   const newArr = [];

//   arr.forEach((element, index, array) => {
//     for (let i = 0; i < array.length; i++) {
//       if (element === array[i]) {
//         copiesFound++;
//         // console.log(copiesFound);
//       }
//       if (copiesFound === 0) {
//         newArr.push(element);
//       }
//       copiesFound = 0;
//     }
//     return newArr;
//   });
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// console.log(
//   diffArray(
//     ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
//   )
// );

function diffArray(arr1, arr2) {
  const newArr = [];
  const arr = [...arr1, ...arr2];
  const arrSubset = [...new Set(arr)];

  for (let i = 0; i < arrSubset.length; i++) {
    const current = arrSubset[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (current === arr[j]) {
        count++;
      }
    }
    count === 1 && newArr.push(current);
    count = 0;
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
