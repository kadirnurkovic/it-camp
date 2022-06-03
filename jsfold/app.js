const niz = [ 10 , 15 , 20 , 25 , 30 , 35, 40 , 45 , 50 , 55 ];

let sum = 0;
let noviNiz = (numbers) => {
for(i = 0; i < numbers.length; i++){
     if(numbers[i] % 2 === 0){
         sum += numbers[i]     }
}
return sum
}

console.log(noviNiz(niz));

niz2 = niz.map((el) => {
    if (el % 2 === 0){
        return el
    }
});
console.log(niz2);
