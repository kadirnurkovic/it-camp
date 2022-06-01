const miles = [15, 20, 1, 60, 45, 120];

const kilometers = (arr) => {
    let km = arr.map(kim => kim * 1.60);
    let totalDistanceInKilometers = km.reduce((prev, current) => prev + current);
    return totalDistanceInKilometers;
}

console.log(kilometers(miles));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myFunc = (nums) => {
    let newNumbers = nums.filter(num => num % 2 === 0).map(num => num * num);
    // let nNumbers = newNumbers.map(el => el * el)
    return (numb = newNumbers.reduce((curr, prev) => curr + prev));
    
}

console.log(myFunc(numbers));

let strings = ["avengers", "captain america", "ironman", "black panther"];

const newFunc = (str) => {
    let newStr = str.map(el => el.toUpperCase());
    return newStr;
}

console.log(newFunc(strings));