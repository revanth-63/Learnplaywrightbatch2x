function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        let stars = "";

        // Add spaces
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }

        // Add stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += "*";
        }

        console.log(spaces + stars);
    }
}

// Call function
printPattern(3);