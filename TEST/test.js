

function mojaFunc(){
    const val = prompt("Unesite prvi broj");
    let power = val * val
    console.log(`The pow of ${val} is ${power}`)
}

mojaFunc()

function zadatak(){
    const CART_DATA = [
        {
          id: 1,
          name: "Hawai Shirt",
          price: 30,
          amount: 2,
          categorty: "summer",
          rating: 4.5,
        },
        {
          id: 3,
          name: "Adidas Slippers",
          price: 35,
          amount: 1,
          categorty: "summer",
          rating: 4.5,
        },{
            id: 6,
            name: "White T-Shirt",
            price: 15,
            amount: 4,
            categorty: "summer",
            rating: 4.7,
          },
          {
            id: 4,
            name: "Summer hat",
            price: 7.5,
            amount: 3,
            categorty: "summer",
            rating: 40,
          },
        ];
        
        
        let newarr = [];
        let newObj = {};
        newObj = CART_DATA.map((el) =>{
            return el.name
        }
        )
        newObj = CART_DATA.map((el, el1) => {
            return el.price
        })

        total = newObj.reduce((curr, prev) => curr + prev
        , 320)

        console.log(`Your total is ${total}`)
        

}

zadatak();

function newZadatak(){
    fetch('https://reqres.in/api/users?data')
      .then(response => response.json())
      .then(el => console.log(el))
      .then((dat) =>{
           return dat.map((el) => {
            return {
                data: el.data}
           })}
           )
} 


 newZadatak()