
let cars = [
    {brand: 'Audi', year: 2018, model: 'A3', miles: 25580, color: 'Grey', }, // the , in the end works on JS but not on JSON
    {brand: 'Jeep', year: 2015, model: 'Grand Cherokee', color: 'Black', miles: 55_000} // _ works with numbers but doesn't show
]

// for (let i in cars){
//     console.log(cars[i])
// }

//destructuring an object
const {brand, model, color} = cars[0]
console.log (brand, model, color)

let person = ['Rodrigo', 'Natalia', 'Christopher', 'Katherine']

// for (let i of person){
//     console.log(i)
// }

// destructuring an array
const [first, second, third] = person
console.log(third, first)