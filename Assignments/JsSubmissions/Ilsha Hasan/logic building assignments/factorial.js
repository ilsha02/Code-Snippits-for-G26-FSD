function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact*i;
    }
    return fact;
}

console.log("factorial of 2=" ,factorial(2)); 
console.log("factorial of 9=" ,factorial(9));  
