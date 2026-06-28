class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        if (this.num2 === 0) {
            return "Cannot divide by zero";
        }
        return this.num1 / this.num2;
    }

    modulus() {
        if (this.num2 === 0) {
            return "Cannot perform modulus by zero";
        }
        return this.num1 % this.num2;
    }
}

// Example usage
const calc = new Calculator(10, 3);
console.log("Addition:", calc.add());
console.log("Subtraction:", calc.subtract());
console.log("Multiplication:", calc.multiply());
console.log("Division:", calc.divide());
console.log("Modulus:", calc.modulus());