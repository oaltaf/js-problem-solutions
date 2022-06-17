console.log("before testing");

function swap(x, y) {
  let temp = x; //contains x value temp 2
  x = y; // x = 3
  y = temp; // y = temp = 2
  return [x, y];
}

console.log(swap(3, 5));

console.log("testing");
