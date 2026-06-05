let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf - returns first index, or -1 if not found
results.indexOf("fail");
results.indexOf("skip");

console.log(results.indexOf("fail"));   // 1
console.log(results.indexOf("skip"));   // -1


// lastIndexOf - searches from the end
results.lastIndexOf("fail");
console.log(results.lastIndexOf("fail")); // 4


// includes — returns boolean
results.includes("error");
results.includes("skip");

console.log(results.includes("error")); // true
console.log(results.includes("skip"));  // false


// find - returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
console.log(r);

// findIndex
nums.findIndex(n => n > 20); // 1, 2, 3

nums.findLast(n => n > 20); // 45]
nums.findLastIndex(n => n > 20);// 3


// find - returns first matching element
let nums = [10, 25, 30, 45];

let r = nums.find(x => x > 20);
console.log("find:", r);  // 25

// findIndex - returns first matching index
let index = nums.findIndex(n => n > 20);
console.log("findIndex:", index);  // 1

// findLast - returns last matching element
let last = nums.findLast(n => n > 20);
console.log("findLast:", last);  // 45

// findLastIndex - returns last matching index
let lastIndex = nums.findLastIndex(n => n > 20);
console.log("findLastIndex:", lastIndex);  // 3


// Method What it returns
// find() - First matching value
// findIndex() - Index of first match
// findLast() - Last matching value
// findLastIndex() - Index of last match