
    
    const n = prompt("Unesite broj");
    let suma = 1;
    
    function vratiBroj(x) 
    {
        suma *= x;
        return suma;
    }
    for (let i = 0; i < n; i++) {
        let broj = prompt("Unesite broj za mnozenje");
        if(isNaN(broj)) { break; }
        vratiBroj(broj)
    
    }
    console.log("Suma je " + suma);
