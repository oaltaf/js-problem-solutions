console.log('This is Duplicate numbers test');

const arr = [2, 4, 5 ,6 , 2 , 5, 4];
// const arr = [2];
// const arr = [];

console.log(arr);

for(let i = 0; i< arr.length; i++){

    for(let j = i+1; j< arr.length; j++){

        if(arr[i] == arr[j]){
            console.log("Number " + arr[i] + " is duplicated");
        }

        if(j == arr.length){
            break;
        }
    }

}