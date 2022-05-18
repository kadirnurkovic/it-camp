const rec = "Sta ste radili danas";
let counter = 0;

for(let i = 0; i < rec.length; i++){
    if(rec[i] === " "){
        console.log(i);
        counter++;
    }
}
console.log(counter)

// UKLONITI SPACE SA STRINGA

const string = "ovo je string"
let newString = "";

for (let i = 0; i < string.length; i++){
    const element = string[i];
    if (element !== " ") {
       newString += element
}
}
console.log(newString)

const noviString = 'ljep'

console.log(noviString.length)