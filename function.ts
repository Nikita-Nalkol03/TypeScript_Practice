function calculatedSquare(num:number):number{
    return num ** 2;
}

let result1=calculatedSquare(5);
let result2=calculatedSquare(8);

console.log("square of 5:",result1);
console.log("square of 8:",result2);

//arrow function 
const multipy=(a: number,b:number):number=>{
    return a * b;
};
console.log(multipy(4,5));