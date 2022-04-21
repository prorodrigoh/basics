const fs = require('fs')

// const data = fs.readFileSync('./hello.txt') // read file syncronously 
// console.log(data.toString('utf-8')) // this will wait until the previous line is executed

// fs.readFile('./hello.txt', (err, data) => { // read file ASYNCrounously
//     console.log(data.toString('utf-8')) // data is the data from the file but is in buffer mode
//                                         // has to be converted toString ('utf-8')
// })

// console.log('hello there') // this line will execute independently from the previous one

// setTimeout(() => {
//     console.log('Wait for me')
// }, 5000);


// PROMISE

// const promise = new Promise ((resolve, reject) => {
//     resolve ('Hello')
//     //reject ('Error')
// })
// console.log(promise)
// promise.then((value) => console.log(value))
// promise.catch((value) => console.log(value))

// define a promise to say hello world but waits 5000 milisecs to execute
const createPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('Hello world')
        }, 5000)
    })
}

// // creates 10 promises
// const promises = []
// for(i=0;i<10;i++){
//     promises.push(createPromise())
// }

// Promise.all(promises) // executes all promises at same time
//     .then((value) =>{
//         console.log(value)
//     })

const run = async function() {
    for (i=0;i<10;i++){
        const value = await createPromise() // make the promise execute as a SYNCronous program
        console.log(value)                  // it will wait the execution to do it again
    }
}
run()