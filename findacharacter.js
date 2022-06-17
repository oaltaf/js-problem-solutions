let arr = "testing";
let myChar = "g";
let i = 0;
let count = 0;

function findAChar(myCharT, arr1) {
  console.log(`Length of string is ${arr1.length}`);

  while (i < arr1.length) {
    // console.log(`${arr[i]}`);
    if (arr1[i] == myCharT) {
      console.log(`character is located at ${i}`);
      count++;
    }

    i++;
  }
  if (count == 0) {
    console.log("No character found in string");
    return -1;
  }
  return i;
}

findAChar(myChar, arr);
