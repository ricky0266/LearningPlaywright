let a = 5;
let b = a++ + ++a; // 5 + 7 = 12
let c = a++ + ++a + ++a + ++a + a++; //7 + 9 + 10 + 11 + 11 = 48
console.log(b); //12
console.log(a); //12
console.log(c); //48

