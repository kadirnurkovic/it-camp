function izracunaj(){
    let prviBroj = prompt("Unesite prvi broj")
    if(isNaN(prviBroj)){
        return false;
    }
    let drugiBroj = prompt("Unesite drugi broj")
    if(isNaN(drugiBroj)){
        return false;
    }
    let treciBroj = prompt("Unesite treci broj")
    if(isNaN(treciBroj)){
        return false;
    }
    return +prviBroj * +drugiBroj * +treciBroj
}
console.log(izracunaj())
