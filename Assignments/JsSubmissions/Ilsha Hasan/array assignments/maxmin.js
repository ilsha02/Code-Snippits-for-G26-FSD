let nums = [1,2,3,4,5,6,7,8,9];
console.log("Given Array is : ", nums);

let min= nums[0];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }else{
         max = nums[i];

    }
       
    
}

console.log("Minimum Element of given array is : ",min);
console.log("Maximum Element of given array is : ",max);
