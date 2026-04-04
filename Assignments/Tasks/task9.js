//10 Mar2026
// Exercise 3 — Deep vs Shallow Copy(Tricky)
// What is the output and why ? How would you fix it ?
// let suite1 = [{ name: "login", status: "pass" }];
// let suite2 = [...suite1]; //Shakkow copy
// suite2[0].status = "fail";
// console.log(suite1[0].status);

//-----------------corrected code--------------

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = suite1.map(test => ({ ...test }));
suite2[0].status = "fail";
console.log(suite1[0].status);
