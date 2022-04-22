import fetch from 'node-fetch'

// function goGetMyBeverages (){

//     let allBevs =[]
//     let allBeers    
//     let allCoffees

//         fetch('https://api.sampleapis.com/beers/ale')
//             .then(rawBeer => rawBeer.json())
//             .then(jsonBeer => {
//                 allBeers = jsonBeer
//                 allBevs = Object.assign(allBeers)
//                 console.log(allBevs.length)
//             })
//             .catch(myErr => console.log('Error found:', myErr))


//         fetch('https://api.sampleapis.com/coffee/hot')
//             .then(rawCoffee => rawCoffee.json())
//             .then(jsonCoffee => {
//                 allCoffees = jsonCoffee
//                 allBevs = Object.assign(allCoffees)
//                 console.log(allBevs.length)
//             })
//             .catch(myErr => console.log('Error found:', myErr))

    
//     console.log(allBevs)
// }

// goGetMyBeverages()

// criar funcao para aceitar o endereco do fetch
// retornar os dados para fora da funcao

// criar funcao async para executar a funcao do fetch
// executar com o primeiro endereco e retornar para o arquivo geral
// esperar a execucao e rodar outra vez com o outro endereco e retornar para o arquivo geral
// retornar o arquivo geral


function goGetBeverages (apiUrl){
  fetch(apiUrl)
        .then(raw => raw.json())
        .then(data => getAllBeverages(data[0]))
        .catch(myErr => console.log('Error found:', myErr))
}
let allBevs = []
let getAllBeverages = (data) => {
  allBevs.push(data)
  console.log(allBevs.length)
}

const beerUrl = 'https://api.sampleapis.com/beers/ale'
const coffeeUrl = 'https://api.sampleapis.com/coffee/hot'

goGetBeverages(beerUrl)
goGetBeverages(coffeeUrl)
