function greetings (msg){
    console.log(msg)
}

greetings("Pozdrav svima");

for( let i = 0; i < 5; i++){
    console.log(i);
}

const obj = new Date();
console.log(obj);

function greet(msg) {
    return function(name){
        console.log(msg, name)
    }
}
   
let eng = greet("Poz");
let spa = greet("Hola");
let deu = greet("Tag");
let slo = greet ("Hej");

eng("babusane");

const objekat = {
    prviEl: "Ime",
    drugiEl: "Prezime",
    broj: 26,
    bool: true,
}

for( el in objekat ){
    if( typeof objekat[el] === 'string'){
        console.log(objekat[el])
    }
}






