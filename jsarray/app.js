const cars = ["BMW", NaN, "Volkswagen", null, "Opel", true];
console.log(cars.length);

for(let i = 0; i < cars.length; i++){
    if(cars[i]){
        console.log(cars[i])
    }
}
for(let clan in cars){
    console.log(clan)
}
