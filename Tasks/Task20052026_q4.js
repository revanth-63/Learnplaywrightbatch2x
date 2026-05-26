// Question 4 - Build Health Reporter
// Problem - Given the percentage of test cases passed in a CI build, report build health
// 100 % - Green Build
// 90-99 % - Stable(investigate failures)
// 70-89 % - Unstable
// Below 70 % - Broken Build(block deployment)


// Sample Input / Output
// Input - 95
// Output - 🟡 Stable - Investigate failures
// Input - 65
// Output - 🔴 Broken Build - Block deployment


// Use exact match for 100 (===)
// Use range checks with >= and <=
// Order matters - check highest condition first
// Stop evaluation once condition is true


let passPercentage = 95;

if (passPercentage === 100) {
    console.log("🟢 Green Build");
} else if (passPercentage >= 90 && passPercentage <= 99) {
    console.log("🟡 Stable - Investigate failures");
} else if (passPercentage >= 70 && passPercentage <= 89) {
    console.log("🟠 Unstable");
} else if (passPercentage < 70) {
    console.log("🔴 Broken Build - Block deployment");
} else {
    console.log("Invalid input");
}