"use strict";
// import { greeting,Product,greet } from "./file1";
exports.__esModule = true;
var trial = require("./file1");
//import {Product as NewProduct} from './file1'
// console.log(greeting);
// greet();
// var prod = new Product('Laptop',2000);
console.log(trial.greeting);
trial.greet();
var prod = new trial.Product('Laptop', 2000);
prod.getinfo();
var greeting = 'jojo';
console.log(greeting);
