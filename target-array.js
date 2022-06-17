let arr1 = [4, 1, 3, 5, 8, 9, 10, 8, 4, 3];
let arr2 = [];
let arr3 = null;
let arr = 0;
const target = 12;

console.log("This is Target array program");

let i = 0;
let j = 1;
let result = 0;
// console.log(`Total number of array elements are ${arr.length}`);

if (arr.length != 0 || arr.length != null) {
  while (i < arr.length) {
    for (j = i + 1; j < arr.length; j++) {
      if (i != j) {
        result = arr[i] + arr[j];
        if (result == target) {
          console.log(
            `${i} and ${j} when value of i = ${arr[i]} and value of j = ${arr[j]}`
          );
        }
      } else {
        console.log(`i == j when ${i} and ${j}`);
      }
    }
    i++;
  }
} else {
  console.log(`Array doesn't have any element`);
}
