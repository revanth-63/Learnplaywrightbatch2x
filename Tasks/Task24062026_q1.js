// Exercise 5: Private Field
class Token {

    #value;

    constructor(val) {

        this.#value = val;

    }

    getToken() {

        return this.#value;

    }

    getMasked() {

        return "***" + this.#value.slice(-4);

    }

}

let t = new Token("abcdef1234");

console.log(t.getMasked());
console.log(t.getToken());
console.log(t.value);
// Refer output for exercise 5 javascript program with explanation below
// Output
// ***1234
// abcdef1234
// undefined
// Explanation
// Step 1
// let t = new Token("abcdef1234");
// #value = "abcdef1234"
// Step 2
// console.log(t.getMasked());
// this.#value.slice(-4) → last 4 characters → "1234"
// "***" + "1234" → "***1234"
// output - ***1234
// Step 3
// console.log(t.getToken());
// Returns full value → "abcdef1234"
// output - abcdef1234
// Step 4
// console.log(t.value);
// value is NOT a public field
// Only #value exists (private)
// So t.value → undefined (no error)
// output - undefined