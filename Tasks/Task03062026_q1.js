function checkPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    console.log("Original:", str);
    console.log("Reversed:", reversed);

    if (str.toLowerCase() === reversed.toLowerCase()) {
        console.log("Result: true (Palindrome)");
    } else {
        console.log("Result: false (Not Palindrome)");
    }
}
// Examples
checkPalindrome("Madam");
checkPalindrome("pramod");