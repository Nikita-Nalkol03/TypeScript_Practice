interface Transaction{
    transactionId: string | number;
    amount : Number;
    note?: String;
}

let transaction1:Transaction={
    transactionId: "tx101",
    amount: 2500,
    note:"shopping"
};

let transaction2:Transaction={
    transactionId:102,
    amount:1000
};

function displayTransaction(transaction:Transaction):void{
    console.log("Transaction ID:",transaction.transactionId);
    console.log("Amonut:",transaction.amount);
    console.log("Note:",transaction.note?? "not note");
}

displayTransaction(transaction1);
displayTransaction(transaction2);