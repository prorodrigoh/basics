let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

let ourCars = [
    {brand: 'Audi', year: 2018, model: 'A3', miles: 25580, color: 'Grey', }, // the , in the end works on JS but not on JSON
    {brand: 'Jeep', year: 2015, model: 'Grand Cherokee', color: 'Black', miles: 55_000} // _ works with numbers but doesn't show
]

const {miles, year} = ourCars[0] // create variables from the object
const miPerYear = miles / (2022 - year)
// console.log(`This car has an average of ${miPerYear} miles per year`)
// if (miPerYear < 10000) {
//     console.log("This is a low mileage car")
// } else {
//     console.log("This is NOT a low mileage car")
// }

// const statement = (miPerYear < 10000) ? "This is a low mileage car" : "This is NOT a low mileage car"
// console.log(statement)

const statement = (miPerYear < 10000) ? 
console.log("This is a low mileage car") : 
console.log("This is NOT a low mileage car")

// console.log(`This is ${(miPerYear < 10000) ? '' : 'NOT '}a low mileage car`)