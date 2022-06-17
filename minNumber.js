

const arr = [39, 22, 4, 66, 3, 1, 42, 7, 80];


function checkMinNumber(arrayOfNumbers) {
    let minNumber = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){

        for(let j=i+1; j<arrayOfNumbers.length; j++){

            if(arrayOfNumbers[i] < arrayOfNumbers[j]){
                minNumber = arrayOfNumbers[i];
            }
            else{
                minNumber = arrayOfNumbers[j];
            }
        }
        

    }
    return minNumber;
}


checkMaxNumber = (arrayOfNumbers) => {

    let maxNumber = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){

        for(let j=i+1; j<arrayOfNumbers.length; j++){

            if(arrayOfNumbers[i] > arrayOfNumbers[j]){
                maxNumber = arrayOfNumbers[i];
            }
            else{
                maxNumber = arrayOfNumbers[j];
            }
        }
}
    return maxNumber;
}


// function checkMaxNumber(arrayOfNumbers) {
//     let maxNumber = 0;
//     for(let i=0; i<arrayOfNumbers.length; i++){

//         for(let j=i+1; j<arrayOfNumbers.length; j++){

//             if(arrayOfNumbers[i] > arrayOfNumbers[j]){
//                 maxNumber = arrayOfNumbers[i];
//             }
//             else{
//                 maxNumber = arrayOfNumbers[j];
//             }
//         }
        

//     }
//     return maxNumber;
// }


console.log("Minimum number in array is = " + checkMinNumber(arr));
console.log("Maximum number in array is = " + checkMaxNumber(arr));