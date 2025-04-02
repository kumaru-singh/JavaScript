// import superheroes from "superheroes";

// const name =  superheroes.random();

// console.log(`I am ${name}.`);

// // const superheroes = require('superheroes');

// console.log(superhero.random()); // Works in CommonJS


// import superheroes from "superheroes";

// const name = superheroes.default.all[Math.floor(Math.random() * superheroes.default.all.length)];

// console.log(`I am ${name}.`);

// const superheroes = require("superheroes");

// const name = superheroes.random();

// console.log(`I am ${name}.`);

const superheroes = await import("superheroes");

const name = superheroes.default.all[Math.floor(Math.random() * superheroes.default.all.length)];

console.log(`I am ${name}.`);

