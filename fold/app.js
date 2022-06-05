
let a, b;

const fib = (num) => {
    let arr = [0 ,1];
    for(let i = 2; i < num; i++){
        a = arr[i - 1];
        b = arr[i - 2];
        arr.push(a + b);
    }
    return arr;
}

console.log(fib(10))