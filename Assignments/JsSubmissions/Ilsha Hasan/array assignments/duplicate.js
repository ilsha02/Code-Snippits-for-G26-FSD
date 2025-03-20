let numbers = [1,2,3,4,2,5,6,6,7];
console.log("Given Array is : ", numbers);
let uniqueNumbers= []; 
for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log( "Unique  Numbers are = " ,uniqueNumbers);
