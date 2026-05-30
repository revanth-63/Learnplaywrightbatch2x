// Triangle Classifier - Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.
let a = 4;
let b = 5;
let c = 6;
// Step 1 Check if triangle is valid
if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Not a valid triangle");
}
// Step 2: Check if all sides are equal
else if (a === b && b === c) {
    console.log("Equilateral triangle");
}
// Step 3: Check if any two sides are equal
else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
}
// Step 4: If none of the above
else {
    console.log("Scalene triangle");
}


// Final Logic Summary (Execution Flow)
// ✅ Check triangle validity first
// If invalid - stop immediately
// ✅ Check Equilateral
// If all equal - stop
// ✅ Check Isosceles
// If any two equal - stop
// ✅ Else
// Scalene
// ✅ Easy Way to Remember
// Condition - Result
// All 3 equal - Equilateral
// Any 2 equal - Isosceles
// None equal - Scalene
// Violates triangle rule - Invalid