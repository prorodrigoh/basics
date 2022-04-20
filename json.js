let car = [
    {brand: 'Audi', year: 2018, model: 'A3', miles: 25_580, color: 'Grey', } // the , in the end works on JS but not on JSON
]
console.log(car)

const carJson = JSON.stringify(car)

console.log(carJson)

const carParse = JSON.parse(carJson)

console.log(carParse)