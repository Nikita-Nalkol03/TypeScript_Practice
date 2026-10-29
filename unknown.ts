let userData:unknown="nikita";

if(typeof userData==="string"){
    console.log("Name:",userData.toUpperCase());
}

userData=25;
if(typeof userData==="number"){
    console.log("Age:",userData);
}

function showError(message:string): never{
    throw new Error(message);
}
console.log("program started");