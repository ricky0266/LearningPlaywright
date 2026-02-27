//------------------For loop----------------
//For loop
//Print "Hello" 5 times
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

//Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }

}

//Print the sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

//Print the multiplication table of 5
let num = 5;
for (let i = 1; i <= 10; i++) {
    let s = num * i
    console.log(s);
}

//------------------While loop----------------

//Print "Playwright" 5 times
let a = 1
while (a <= 5) {
    console.log("Playwright")
    a++
}

//Print numbers from 1 to 10
let a = 1
while (a <= 10) {
    console.log(a)
    a++
}


//Print even numbers from 1 to 20

let a = 1
while (a <= 20) {
    if (a % 2 === 0)
        console.log(a)
    a++
}

//Calculate sum of first 10 natural numbers
let b = 1;
let sum = 0;
while (b <= 10) {
    sum = sum + b;
    b++
}

console.log(sum)

//Print the multiplication table of 7
let b = 1;
let num = 7;
while (b <= 10) {
    num1 = num * b;
    console.log(num1)
    b++
}

