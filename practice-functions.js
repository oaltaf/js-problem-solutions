
function sum(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}

console.log(sum(2, 4));
sum(8, 4);
sum(3, 4);

var mySum = sum(2, 9);

console.log(mySum);

var divisionFun = function(nu1, nu2){
    return nu1/nu2;
}

console.log(divisionFun(5,5));


//Arrow function
var testArrow = (test, test2) => {
    return test - test2;
}

console.log(testArrow(70, 20));


//we can use single line of code using arrow function in which statement after arrow is considered
//as return statement
var tArrow = (a1, b1) => a1 + b1;

console.log(tArrow(3, 8));