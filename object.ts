let employee:{
    name: string;
    age:number;
    salary:number;
}={
    name:"nikita",
    age:21,
    salary:50000
};

console.log(employee);

//using interface
//interface is used to define struture
//Employee interface
//employee1 is object
interface Employee{
    name:string;
    age: number;
    salary: number;
}

let employee1:Employee={
    name:"priya",
    age:24,
    salary:45000
};
console.log(employee1);

let employee2:Employee={
    name:"john",
    age:45,
    salary:60000
}
console.log(employee2);


//product Interface
console.log("===================================")
interface Product{
    name: string ;
    price : number;
    quantity: number;
}

let product1:Product={
    name:"laptop",
    price: 50000,
    quantity:2
};

function calculatedTotal(product:Product):number{
    return product.price * product.quantity;
}
console.log("product :",product1.name);
console.log("quantity:",product1.quantity)
console.log("Total price:",calculatedTotal(product1));