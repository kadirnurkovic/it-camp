const DATA = [100, 65 ,76, 80, 99, 53, 1, 2]

const returnEven = (number) => {
     return (even = number.filter(number => number % 2 === 0 && number < 50))
}
console.log(returnEven(DATA))

// NEXT

const DATA1 = [5, 3, 2, 8, 7, 9];
const returnPow = (numbers) => {
    const pow = numbers.map(element => element * element + 10);
    return pow;
}

console.log(returnPow(DATA1));

const DATA2 = [100, 200, 250, 400, 520];
const retPow = DATA2.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)

const DATA3  = [26, 18 ,16, 22, 30, 28]
const sumAverage = (ages) => {
     const vrednost = ages.reduce((el1 , el2) => el1 + el2)
     const value = vrednost / ages.length;
     return value;
}

console.log(sumAverage(DATA3));

// EVERY AND SOME

console.log(DATA.some(el => el > 50))
console.log(DATA.every(el => el > 50))
console.log(DATA.includes(100));

const elements = ['Fire', 'Water', 'Air']

console.log(elements.join(''))