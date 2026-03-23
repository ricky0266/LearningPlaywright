//10Mar2026
// Exercise 2 — Spot the Bug
// What is wrong with this code? Fix it.
// let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort();
// console.log("Fastest:", sorted[0]);

//Correct code for sorting
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted[0]);
