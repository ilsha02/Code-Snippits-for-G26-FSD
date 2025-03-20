let cart = {
    itemname: "laptop",
    quantity: 4,
    price: 5000,
};
cart.quantity= 5;

let totalCost = cart.quantity * cart.price;

cart.discount = 1000;
console.log("Total Cost after discount: ", totalCost-cart.discount);

