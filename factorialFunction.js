

const number = 5;

function findFactorial(num){

    let i = num;
    while (i>1){
        num = num * (i-1);
        i--;
    }
    return num;
}

console.log("Factor of " + number + " is = " + findFactorial(number));