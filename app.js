

//LET AND CONST

// const ime = 'Max ';

// let godine = 30;
// console.log(ime+godine)

// godine = 25;
// console.log(ime+godine)
// console.log(5 === "5");
// console.log(5 !== 6)

// const ime = 'Max'
// const godine = 40;
// const nesto = prompt("nesto")

// console.log(meseci)

// let age = 20;
// console.log(age++)

// age = age + 1;
// console.log(age)
// let age = 17;

// if (age = 17){
//     console.log("TJT")
// }else{
//     console.log("nije tacno")
// }

// const age = prompt("Unesi tvoje godine");

// if(age === 18){
//     console.log("Tek si postao punoletan")
// }
// else if(age >= 18) {
//     console.log("Ti si odrastao")
// }else if (age > 12){
//     console.log("Ti si tinejdzer")
// }else{
    // FIZZ CHALLENGER 
    // 0 - 100 I ISPISUJEMO BROJEVE
    // 3 - FIZZ
    // 5 - BUZZ 
    // 3 I 5 - FIZZBUZZ


   for (let i = 1; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log(i , "FIZZ BUZZ");
    }else if(i % 3 === 0){
        console.log(i, "FIZZ");
    }else if(i % 5 === 0){
        console.log(i, "BUZZ");
    }else{
        console.log(i);
    }
}




