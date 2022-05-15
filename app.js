
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




