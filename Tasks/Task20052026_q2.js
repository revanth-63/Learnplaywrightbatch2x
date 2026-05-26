// Question 2 - Test Case Pass / Fail Verdict
// Problem - Compare actual result with expected result and print test verdict


// Sample Input / Output
// expected = "Login Successful"
// actual = "Login Successful"
// Output - ✅ Test Passed

// expected = "Login Successful"
// actual = "Invalid Credentials"
// Output - ❌ Test Failed - Expected - Login Successful, Got - Invalid Credentials
// https://emojipedia.org/check-mark-button


let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected}, Got: ${actual}`);
}


let expected = "Login Successful";
let actual = "Invalid Credentials";

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed - Expected - ${expected}, Got - ${actual}`);
}