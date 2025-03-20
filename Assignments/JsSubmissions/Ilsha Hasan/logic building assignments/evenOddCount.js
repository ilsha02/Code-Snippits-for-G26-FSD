 let numbers = [10,20,30,40,50,60,70,80,90,99]

let ec = 0, oc = 0;
for (let i of numbers) {
    if (i % 2 === 0) {
        ec++;
    } else {
        oc++;
    }
}



console.log("No. of even counts=" ,ec);
console.log("No. of odd counts=" ,oc);
