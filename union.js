"use strict";
let transaction1 = {
    transactionId: "tx101",
    amount: 2500,
    note: "shopping"
};
let transaction2 = {
    transactionId: 102,
    amount: 1000
};
function displayTransaction(transaction) {
    console.log("Transaction ID:", transaction.transactionId);
    console.log("Amonut:", transaction.amount);
    console.log("Note:", transaction.note ?? "not note");
}
displayTransaction(transaction1);
displayTransaction(transaction2);
