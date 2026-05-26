//Question 3 - Leap Year Check
//Problem - Take a year and check if its a leap year
//Rules
//Divisible by 4 AND not divisible by 100 - Leap year
//OR divisible by 400 - Leap year
//Else - Not a leap year
// Leap Year Check


let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}