// Question 3 - Bug Severity Classifier
// Problem - Given a bug's impact score (1-10), classify the severity
// 9 - 10 - Critical(block release)
// 7 - 8 - High
// 4 - 6 - Medium
// 1 - 3 - Low
// Anything else - Invalid score


// Sample Input / Output
// Input - 9
// Output - Severity: Critical - Block release
// Input - 5
// Output - Severity - Medium


// Use >= and <= for range checking
// Order matters (start from highest range)
// Stop checking once condition becomes true

let score = 9;
if (score >= 9 && score <= 10) {
    console.log("Severity: Critical - Block release");
} else if (score >= 7 && score <= 8) {
    console.log("Severity: High");
} else if (score >= 4 && score <= 6) {
    console.log("Severity: Medium");
} else if (score >= 1 && score <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}