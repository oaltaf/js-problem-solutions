let arr1 = ["osama", "fahad", "hasan", "osama", "javed", "osama", "hasan"];

let i = 0;
let count = 0;

while (i < arr1.length) {
  for (var j = i + 1; j < arr1.length; j++) {
    if ((arr1[i] = arr1[j])) {
      count++;
      arr1[j] = arr1[j] + count;
    }
  }

  console.log(`value of arr[j] is ${arr1[j]}`);
  i++;
}
