// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);

// every and some

[80, 90, 85].every(s => s >= 70);
console.log([80, 90, 85].every(s => s >= 70)); // true
[80, 60, 85].every(s => s >= 70);
console.log([80, 60, 85].every(s => s >= 70)); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

let statuscodes = [200, 201, 203];
let apicheck = statuscodes.every(statuscode => statuscode > 200);
console.log("All status codes > 200? ->", apicheck);


// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
console.log([80, 60, 85].some(s => s < 70)); // true
[80, 90, 85].some(s => s < 70); // false
console.log([80, 90, 85].some(s => s < 70)); // false
//arrow : s => s >= 70

