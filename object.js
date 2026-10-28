"use strict";
let employee = {
    name: "nikita",
    age: 21,
    salary: 50000
};
console.log(employee);
let employee1 = {
    name: "priya",
    age: 24,
    salary: 45000
};
console.log(employee1);
let employee2 = {
    name: "john",
    age: 45,
    salary: 60000
};
console.log(employee2);
//product Interface
console.log("===================================");
let product1 = {
    name: "laptop",
    price: 50000,
    quantity: 2
};
function calculatedTotal(product) {
    return product.price * product.quantity;
}
console.log("product :", product1.name);
console.log("quantity:", product1.quantity);
console.log("Total price:", calculatedTotal(product1));
