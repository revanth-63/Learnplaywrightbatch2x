class Student {
    // Static variable
    static batchName = "Playwright 2x Batch";

    // Static method
    static getBatchInfo() {
        return `Batch: ${Student.batchName}`;
    }

    constructor(name, age, course) {
        // Non-static variables (instance variables)
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Non-static method
    printDetails() {
        console.log(
            `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}, Batch: ${Student.batchName}`
        );
    }
}

// Print static method
console.log(Student.getBatchInfo());

// Create 10 student objects
const students = [
    new Student("Revanth", 30, "Playwright"),
    new Student("Amit", 25, "Playwright"),
    new Student("Haridas", 27, "Playwright"),
    new Student("Rahul", 29, "Playwright"),
    new Student("Pramod", 26, "Playwright"),
    new Student("Kiran", 28, "Playwright"),
    new Student("Prakash", 24, "Playwright"),
    new Student("Vikram", 31, "Playwright"),
    new Student("Kumar", 23, "Playwright"),
    new Student("Arjun", 32, "Playwright")
];

// Print all students
students.forEach(student => student.printDetails());