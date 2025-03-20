let book= {
    title: "Atomic Habits ",
    author: "James Clear",
    isAvailable: true
};

if(book.isAvailable){
    console.log("Book is Available at the moment");
    book.isAvailable = false;
}
else{
    console.log("Book is not Available at the moment");
}
console.log("Updated Book Object");
