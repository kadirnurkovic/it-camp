// const car = {
//     car: "Mercedes",
//     year: "2004",
//     engine: "front",
//     color: "black",
//     automatic: true,
// };

// const arr = [2 ,4 ,6 ,8 ,9 , 11, 12, 15];

// const obj = {
//     name: "Steve",
//     myFunc: function(value){
//         this.value = value;
//         let newArr = arr.filter((el) => el % 2 === 1 && el > this.value);
//         return newArr;
//     }
// }

// console.log(obj.myFunc(10));

// const obj2 = {
//     name: "Anakin",
//     age: "24",
//     job: "Jedi",
//     weapon: function(){
//         let integrity = this.job;
//         integrity = integrity.split('').reverse().join('');
//         console.log(integrity)
//     }
// };

// obj2.weapon();

// // TASK 3

// const valua = "Domestic pets";
// let opress = "Thinking about everything"

// function doSmth(value, index){
//     this.value = value;
//     this.index = index;
//     this.value = valua.substring(1 , 6);
//     opress = opress + " " + this.value;
//     console.log(opress)
//     let newOp = opress.split("", this.index);
//     for(let i = 0; i < this.index; i++){
//         newOp[i] = newOp[i].toUpperCase();
//     }
//     return newOp.join('');
// }
// console.log(doSmth(2 ,6));

// console.log(typeof(this));

// const objekat = {
//     prviElement: 5,
//     drugiElement: 2,
//     treciElement: function (a ,b){
//         a = this.prviElement;
//         b = this.drugiElement;
//         return a * b;
//     }
// }

// console.log(objekat.treciElement());

// const drugiObj = {
//     prviElement: 6,
//     drugiElement: 8,
// }

// console.log(objekat.treciElement.apply(drugiObj , [2 , 4]));

// this.x = 9;    
// const module = {
//   prviElement: 81,
//   drugiElement: 77,
//   getX: function() { return this.x; }
// };

// console.log(module.getX());

// const retrieveX = objekat.treciElement.bind(module);
// console.log(retrieveX(2 , 5));

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(3, 1);
// console.dir(months);

// const p = new Promise((resolve , reject) => {
//     const val = true;
//     if(val){
//         resolve(console.log("Success"));
//     }else{
//         reject(console.log("FAIL"));
//     }
// });

// p.then(console.log("You can continue doing the code"))
// .catch((err) => {
//     console.log("ERROR", err);
// });

// console.log("Hello");

// function num() {
//     return this;
// }

// console.log(num());

// var objekt;
// console.log(objekt);
// objekt = [
//     {name: "Ibro",
//      age: 29,},
//      {
//         name: "Veljko",
//         age: 23,
//      }
// ]

// let prom = new Promise((resolve, reject)=> {
//     resolve()
//     reject()
// });

// let prom2 = new Promise((resolve, reject)=> {
//     resolve()
//     reject()
// });

// let prom3 = new Promise((resolve, reject)=> {
//     resolve()
//     reject()
// });

// prom.then(() => 
//  prom2.then(() => console.log("B")),
 
//  console.log("A")
//  );

// prom3.then(() => console.log("C"));

// Sum(5 ,2)

// function Sum(a ,b){
//     console.log(a + b)
// };

// const a = ['S', 'p', 'a', 'c', 'e'];
// const newa = a.toString().replaceAll(",", " ")
// console.log(newa);

// setTimeout(() => {
//     console.log("b") ,
//     setTimeout(() => {
//         console.log("c")
//     }, 1000) },1000)
// setTimeout(() => console.log("a"), 1000);

// setTimeout(() => {
//     console.log("a");
//     setTimeout(() => {
//         console.log("b");
//         setTimeout(() => {
//             console.log("c");
//         }, 1000);
//     }, 1000);
// }, 1000)


// var arr1 = [
//     {user:"dan",liked:"yes",age:"22"},
//     {user:"sarah",liked:"no",age:"21"},
//     {user:"john",liked:"yes",age:"23"},
//    ];
   
//    const arr2 = arr1.map((v) => {
//       return { 
//          user: v.user,
//          liked: v.liked 
//       }
// });
   
//    console.log(arr2);

// const thirdTask = async () => {
//       const response = await fetch("https://reqres.in/api/users?page=2");
//       const users = await response.json();
//       return users;
//   };
//   thirdTask()
//       .then((arg1) => arg1)
//       .then((arg2) => console.log(arg2.data))
//       .catch(() => `There is some problem.`);

let a = 15;
let b = -25;
let c = 13;

if (a > 0 && b > 0 || c > 0){
    console.log("Hello World");
}else{
    console.log("No");
}
     
  






















