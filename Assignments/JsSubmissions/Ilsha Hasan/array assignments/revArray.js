let strings = ["alexa","siri","gemini"];
console.log("Given Array is : ",strings);

let revArray = [];
for(let i=strings.length-1; i>=0; i--){
    revArray.push(strings[i]);
}

console.log( "Reversed Array is : ",revArray);