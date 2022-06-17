console.log('This is Prime Number test');

const number = 51;
let flag = 0;

function checkPrimeNumber(num){

    if(num == 0 || num == 1){
        console.log(num + " Number is not a prime number")
    }
    else{
        for(let i = 2; i <= num/2; i++){

            if(num%i == 0){
                console.log(num + " is NOT a Prime Number");
                flag = 1;
                break;
            }
        }

        if(flag == 0){
            console.log(num + " is a Prime Number");
        }
    }
    return num;
}

console.log(checkPrimeNumber(number));





