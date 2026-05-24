let a = 10;
let b = 25;

// Using ternary operator
let max = (a > b) ? a : b;

console.log("Maximum number is: " + max);

// How it works
// (a > b) is the condition
// If true - returns a
// If false - returns b


let a = 10;
let b = 25;
let c = 15;

// Using nested ternary operator
let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
console.log("Maximum number is: " + max);

// Explanation
// First, compare a and b
// If a > b, then compare a with c
// Otherwise, compare b with c
// The largest among the three is returned


let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);

// a++ - post - increment(use value, then increment)
// ++a - pre - increment(increment, then use value)
// --a - pre - decrement(decrement, then use value)
// a-- - post - decrement(use value, then decrement)

// Initial
// a = 5

// Expression
// a++ + ++a - --a + a-- + ++a

// A = a++

// Value used = 5
// Then a = 6

// B = ++a

// First increment a = 7
// Value used = 7

// C = --a

// First decrement a = 6
// Value used = 6

// D = a--

// Value used = 6
// Then a = 5

// E = ++a

// First increment a = 6
// Value used = 6

// Substitute all values
// 5 + 7 - 6 + 6 + 6

// Final Output
// console.log(a++ + ++a - --a + a-- + ++a);
// 18
// Final value of a
// a = 6

// 18
// 6