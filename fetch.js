// FETCH API
import fetch from 'node-fetch'

// https://api.sampleapis.com/beers/ale

// async function getDataAsync(){
//     try {
//         const response = await fetch('https://api.sampleapis.com/beers/ale') // by default uses GET request and return a PROMISE
//         const data = await response.json()
//         return data          // because it returns data, i can use it outside of the function
//     } catch(err){
//         console.error(err)
//     }
// }
// getDataAsync()


// fetch('https://api.sampleapis.com/beers/ale')
//     .then(response => {             // response is a Promise type
//         return response.json() 
//     })
//     .then(data => {                 // data is an object type - 
                                       // there is no way to access it outside this .then
//         console.log(data[87].name)  // everything that I need to do with data, has to happen here
//     })
//     .catch(err => {
//         console.log(err)
//     })

// fetch('https://api.sampleapis.com/beers/ale')
//     .then(response => response.json())      // besause it is only one line function
//     .then(beer => console.log(beer[87]))    // we can ommit the {} and the return
//     .catch(err => console.log(err))         // WORKS ONLY WITH ONE LINE FUNCTION