// Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;  // template literal

//Creating Strings

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);


// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report)


// String() constructor (converts other types)
console.log(String(200));
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // "[1,2]"
