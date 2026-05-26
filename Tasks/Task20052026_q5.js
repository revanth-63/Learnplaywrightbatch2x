// Question 5 - Login Lockout After Failed Attempt
// Problem - Track failed login attempts. Lock the account after 3 failed attempts


// Sample Input / Output
// Input - attempts = 2
// Output - 1 attempt left before lockout
// Input - attempts = 3
// Output - 🔒 Account Locked - Contact support
// Input - attempts = 0
// Output - Login successful


// sample 1
let attempts = 2;
if (attempts === 0) {
    console.log("Login successful");
} else if (attempts < 3) {
    let remaining = 3 - attempts;
    console.log(`${remaining} attempt left before lockout`);
} else if (attempts >= 3) {
    console.log("🔒 Account Locked - Contact support");
} else {
    console.log("Invalid input");
}


// sample 2
let attempts = -1;
if (attempts < 0) {
    console.log("Invalid input");
} else if (attempts === 0) {
    console.log("Login successful");
} else if (attempts < 3) {
    console.log(`${3 - attempts} attempt left before lockout`);
} else {
    console.log("🔒 Account Locked - Contact support");
}