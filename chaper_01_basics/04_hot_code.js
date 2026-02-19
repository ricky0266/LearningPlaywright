console.log("Hello World");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 100000; i++) {
    result = add(i, i + 1);
}
console.log("After 1000 calls:", result);
