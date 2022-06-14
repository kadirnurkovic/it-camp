let log = console.log;

// const students = [
//     { name: "Faris", grade: 8, year: 2 },
//     { name: "Isko", grade: 10, year: 4 },
//     { name: "Aldin", grade: 8, year: 2 },
//     { name: "Amina", grade: 9, year: 4 },
//     { name: "Sabina", grade: 9, year: 3 },
//     { name: "Denis", grade: 7, year: 4 },
//     { name: "Senad", grade: 6, year: 1 },
// ]

// function myFunc(arr){
//     let newArr = arr.map(el => el.grade);
//     log(newArr);
//     let myArr = newArr.reduce((prev, curr) => (prev + curr));
//     let newNumb = myArr / newArr.length;
//     return newNumb.toFixed(2);
// }

// log(myFunc(students));

const person = {
    name: "John Doe",
    age: 22,
};

function sayHello(){
    log(`Hello ${this.name}`);
}

sayHello();

let hello = sayHello.bind(person)

hello();
