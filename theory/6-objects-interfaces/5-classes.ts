// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🧱 What is a Class?
// -------------------------
// A class is a blueprint for creating objects with shared properties and methods.
// It defines how the object will look and behave.

console.log("\n-------------------------")
console.log("🧱 Basic Class")
console.log("-------------------------\n")

// Imagine a class that represents a person
// It has properties like name and age, and methods to greet.
// Classes are defined using the `class` keyword.

class Person {
    name: string
    age: number

    // Constructor is a special method!
    // Constructor runs when we create an instance of the class
    // It initializes the properties of the class.
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// Class is a blueprint! Just a definition.
// Now we can create instances (objects) of the Person class.
// Imagine in real life, you can create many people with different names and ages.

const alice = new Person("Alice", 28)
alice.greet() // Hello, my name is Alice and I am 28 years old.

const bob = new Person("Bob", 32)
bob.greet() // Hello, my name is Bob and I am 32 years old.

console.log("\n-------------------------")
console.log("🧱 Class and Properties")
console.log("-------------------------\n")

// Classes can have properties (data) and methods (functions).

const john = new Person("John", 25)
console.log("Name:", john.name) // John
console.log("Age:", john.age) // 25

// -------------------------
// 🧰 Why Use Classes?
// -------------------------
// - Organize related data (properties) and behavior (methods) together
// - Reuse code via inheritance
// - Encapsulate logic for cleaner and more maintainable code

// -------------------------
// ⚙️ Adding Methods
// -------------------------
// Methods define actions the class instances can perform.

console.log("\n-------------------------")
console.log("⚙️ Adding Methods")
console.log("-------------------------\n")

class Calculator {
    // Methods can perform operations
    add(a: number, b: number): number {
        return a + b
    }

    subtract(a: number, b: number): number {
        return a - b
    }
    
    // wait, where is constructor? We don't need one here!
    // This class doesn't need to initialize any properties,
    // so we can skip the constructor!
}

const calc = new Calculator()
console.log("Sum:", calc.add(5, 3)) // 8
console.log("Difference:", calc.subtract(5, 3)) // 2

// -------------------------
// 🧠 Summary:
// -------------------------
// - Classes are blueprints for creating objects
// - They contain properties (data) and methods (behavior)

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Classes: https://www.typescriptlang.org/docs/handbook/2/classes.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
