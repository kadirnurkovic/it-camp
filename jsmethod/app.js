const DATA1 = [2, 26, 38, 75, 11,29]
const DATA2 = ["a", "b", "c", "d", "e"]

// Napravi pomocni niz koji ce da sadrzi dva niza spojena (niz 1 i niz 2)
// Napraviti jos jedan niz koji ce da izvuce parne brojeve
// U taj niz parnih brojeva umetnite broj 10 i broj 20
// Vratite prvi pomocni niz i drugi pomocni niz

const mutateArrays = (Array1 , Array2) => {
    let noviNiz = Array1.concat(Array2)
    let parni = []
    console.log(noviNiz)
    for (let i = 1; i < noviNiz.length; i++){
        if (noviNiz[i] % 2 === 0){
            parni.push(noviNiz[i])
        }
    }
    console.log(parni)
    parni.unshift(10, 20);
    console.log(parni)
}
mutateArrays(DATA1, DATA2)

const words = ["daljinski", "televizor", "telefon", "voda", "ranac", "stolica"]
const filteredArray = words.filter(item => item.length < 6)
console.log(filteredArray);
const numbers = [2, 8, 9, 11, 26, 85, 90, 102, 1003, 1120]
const filteredArraysNum = numbers.filter(item => item % 2 === 0)
console.log( filteredArraysNum)

const number = [2, 5, 10, 3 ,4 ,8]
const squaredNumbers = number.map((item) => Math.sqrt(item))
console.log(squaredNumbers)

// const squaredNumber = (item, index, array) => {
//       console.log("PRVI ARGUMENT", item)
//       console.log("DRUGI ARGUMENT", index)
//       console.log("TRECI ARGUMENT", array)
// }

// squaredNumber()

const dogAge = [1, 3, 4, 2, 7 ,6]

const dogAgeToHuman = (ages) => {
    const humanAge = ages.map((age) => {
        if (age > 2 && age < 8){
            return (age * 4) / 2
        }else if(age > 2){
            return age * 7 
        }
    }
    )
    let newAge =  humanAge.filter((age) => age < 10)
    return newAge 
}

console.log(dogAgeToHuman(dogAge))



