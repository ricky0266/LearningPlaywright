//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found

console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip"));        // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");    // 4

// includes — returns boolean
results.includes("error"); // true
results.includes("skip");       // false



// find — returns first matching element

let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 20));  // 25,30,45 -> A -25

// findIndex
console.log(nums.findIndex(n => n > 20));

console.log(nums.findLast(n => n > 20)); // 45] 
console.log(nums.findLastIndex(n => n > 20));// 3