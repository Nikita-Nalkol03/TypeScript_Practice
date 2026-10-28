"use strict";
let marks = [85, 90, 76, 95];
let students = ["nikita", "akash", "neha"];
console.log("All marks:", marks);
console.log("first marks:", marks[0]);
console.log("second student:", students[1]);
marks.push(88);
students.push("priya");
console.log("updated marks:", marks);
console.log("updated students:", students);
let scores = [70, 80, 90];
scores.forEach((score) => {
    console.log(score);
});
let prices = [100, 200, 300];
let increasedPrices = prices.map((price) => {
    return price + 50;
});
console.log(increasedPrices);
