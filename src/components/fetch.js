// We define the package
// let covid = require('novelcovid');

// // In this case we will be using .all()
// // If you would like a .countries() tutorial, feel free to join our support server

// let data = covid.all();
// console.log(data);

// /* Returns 
// { cases: 220877,
//   deaths: 8988,
//   recovered: 85782,
//   updated: 1584612112774 }
let covid = require('novelcovid');

// IMPORTANT: Inorder to access the data, we will need to create an async function.

(async () => {
    let data = await covid.all();

    // Since we are using an async function, we need to return the data.
    return console.log(`
    Total Cases: ${data.cases}
    Total Deaths: ${data.deaths}
    Total Recovered: ${data.recovered}
    Last Updated on: ${data.updated}`);
})();