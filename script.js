let a = 15;
let b = -25;
let c = 13;

if (a > 0 && b > 0 || c > 0){
    console.log("Hello World");
}else{
    console.log("No");
}


count = 0
let increment = () => ++count
console.log(increment())

const kont = document.createElement("div");
const body = document.querySelector("body")

const print = (text) => {
    const child = body.appendChild(kont);
    child.textContent = text;
}

const printf = console.log;

let incrementer = (a) => {
    return a + 1
}

let arrayOfNumbers = [1 ,2 ,3 ,4 ,5]
let arrayOfReversedNumbers = arrayOfNumbers.reverse().join("+").slice(0 ,1);
function addition() {
    return parseInt(arrayOfNumbers) * 30
}
printf(addition())

class Person{
    constructor(name ,lastName){
        this.name = name
        this.lastName = lastName
    }
    personification(){
        return `My name is ${this.name}, and my last name is ${this.lastName}`
    }
}

const osoba = new Person("John" , "Doe");

printf(osoba.personification("John" , "John"))






     
  






















